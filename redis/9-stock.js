import express from 'express';
import { createClient } from 'redis';
import {promisify} from 'util'

const app = express();
app.use(express.json());

const client = createClient();
const setAsync = promisify(client.set).bind(client);
const getAsync = promisify(client.get).bind(client);

const listProducts = [
    {itemId: 1, itemeName: 'Suitcase 250', price: 50, initialAvailableQuantity: 4},
    {itemId: 2, itemeName: 'Suitcase 450', price: 100, initialAvailableQuantity: 10},
    {itemId: 3, itemeName: 'Suitcase 650', price: 350, initialAvailableQuantity: 2},
    {itemId: 4, itemeName: 'Suitcase 1050', price: 550, initialAvailableQuantity:5},
]

const getItemById = (id) => {
    for (const product of listProducts) {
        if (product.itemId === id){
        return product;
        }
    }
}

const reserveStockById = async (itemId, stock) => {
    await setAsync(itemId, stock);
}

const getCurrentReservedStockById = async (itemId) => {
    const stock = await getAsync(itemId);
    return stock;
}

app.get('/list_products', (req, res) => {
    res.json(listProducts);
});

app.get('/list_products/:itemId', async (req, res) => {
    const itemId = Number(req.params.itemId);
    const product = getItemById(itemId);
    if (product) {
        const inStock = Number(product.initialAvailableQuantity)
        reserveStockById(itemId, inStock);
        const currentQuantity = await getCurrentReservedStockById(itemId);
        if (currentQuantity < 1) {
            res.json({'status': `No available items in stock with id ${itemId}`});
            return;
        }
        res.json({...product, currentQuantity});
        return;
    }
    else{
        res.status(404).json({'status': 'No product found'});
    }
});

app.get('/reserve_product/:itemId', async (req, res) => {
    const itemId = Number(req.params.itemId);
    const product = getItemById(itemId);
    if (!product) {
        res.status(404).json({"status":"Product not found"});
        return;
    }
    const stock = await getCurrentReservedStockById(itemId);
    console.log(stock);
    if (stock < 1) {
        res.json({"status":"Not enough stock available", "itemId": itemId});
        return;
    }
    res.json({"status":"Reservation confirmed","itemId":itemId});
})

app.listen(1245);

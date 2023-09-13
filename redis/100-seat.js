import { createClient } from "redis";
import { createQueue } from "kue";
import {promisify} from 'util';
import express from 'express';

const app = express();
const client = createClient();
const queue = createQueue();

const getAsync = promisify(client.get).bind(client);
const reserveSeat = (number) => {
    client.set('available_seats', number);
}

const getCurrentAvailableSeats = async () => {
    const seats = await getAsync('available_seats');
    return seats;
}


app.get('/available_seats', async (req, res) => {
    const numberofSeats = await getCurrentAvailableSeats()
    res.json({"numberOfAvailableSeats":numberofSeats});
});

app.listen(1245);

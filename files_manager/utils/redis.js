import { createClient } from "redis";
import {promisify} from 'util';

class RedisClient {
    constructor() {
        this.client = createClient();
        this.isClientConnected = true;
        this.client.on('error', (error) => {
            console.log(error);
            this.isClientConnected = false;
        });
        this.client.on('connect', () => {
            this.isClientConnected = true;
        })
    }
    isAlive() {
        return this.isClientConnected;
    }

    async get(key) {
        const redisGetAsync = promisify(this.client.get).bind(this.client);
        const val = await redisGetAsync(key);
        return val;
    }

    async set(key, value, time) {
        const redisSetAsync = promisify(this.client.set).bind(this.client);
        await redisSetAsync(key, value);
        await this.client.expire(key, time);
    }

    async del(key) {
        const delAsync = promisify(this.client.del).bind(this.client);
        await delAsync(key);
    }
}

const redisClient = new RedisClient();

export default redisClient;

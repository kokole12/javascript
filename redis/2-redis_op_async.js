import { createClient, print} from "redis";
import {promisify} from 'util';

const client = createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server')
});

client.on('error', (error) => console.log(`Redis client not connected to the server: ${error}`));

const setNewSchool = (schoolName, value) => {
    client.set(schoolName, value, print);
}

const asyncGet = promisify(client.get).bind(client);

const displaySchoolValue = async (schoolName) => {
    const responese = await asyncGet(schoolName)
    .catch(error => {
        if (error) {
            console.log(error);
            throw error;
        }
    });
    console.log(responese);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

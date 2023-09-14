import { createClient } from "redis";
import { createQueue } from "kue";
import {promisify} from 'util';
import express from 'express';

const app = express();
const client = createClient();
const queue = createQueue();

let reservationEnabled = true;

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

app.get('/reserve_seat', async (req, res) => {
    if (reservationEnabled ===  false) {
        res.json({ "status": "Reservation in process" });
        return;
    }
    const seatsJob = queue.createJob('reserve_seat', {'seat': 1}).save((error) => {
        if (error) {
            res.json({ "status": "Reservation failed" });
            return;
        }
        res.json({ "status": "Reservation in process" });
    });
    seatsJob
        .on('complete', () =>{
            console.log(`Seat reservation job ${seatsJob.id} completed`);
        })
        .on('failed', (error) => {
            console.log(`Seat reservation job JOB_ID failed: ${error}`);
        });

});

app.get('/process', (req, res) => {
    res.json({ "status": "Queue processing" });
    queue.process('reserve_seat', async (job, done) => {
        const seats = Number(await getCurrentAvailableSeats());
        if (seats === 0) {
            reservationEnabled = false;
            done(Error('Not enough seats available'));
        }
        else {
            reserveSeat( seats - 1 );
            done();
        }

    });
});

app.listen(1245);
reserveSeat(50);


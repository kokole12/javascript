import { createQueue } from "kue";

const queue = createQueue();

const notificationJob = queue.create('push_notification_code', {
    phoneNumber: '',
    message: ''
}).save((error) => {
    if (!error) {
        console.log(`Notification created with: ${notificationJob.id}`);
    }
});

notificationJob
    .on('complete', () => {
        console.log('Notification job completed');
    })
    .on('failed', () => {
        console.log('Notification job failed');
    })
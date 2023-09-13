export default function createPushNotificationsJobs (jobs, queue) {
    if (!Array.isArray(jobs)) {
        throw new Error('Jobs is not an array');
    }
    jobs.forEach(job => {
        const jobqueue = queue.createJob('push_notification_code_3', job).save(() => {
            console.log(`Notification job created: ${jobqueue.id}`);
        });
        jobqueue
            .on('completed', () => {
                console.log(`Notification job ${jobqueue.id} completed`);
            })
            .on('failed', (error) => {
                console.log(`Notification job ${jobqueue.id} failed: ${error}`);
            })
            .on('progress', (progress, data) => {
                console.log(`Notification job JOB_ID ${progress}% complete`)
            })
    })
}
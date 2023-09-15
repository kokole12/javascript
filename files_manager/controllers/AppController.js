import redisClient from '../utils/redis';
import dbClient from '../utils/db';

export default class AppController {
  static getSatus(req, res) {
    const redisConnect = redisClient.isAlive();
    const dbConnected = dbClient.isAlive();
    res.json({ redis: redisConnect, db: dbConnected });
  }

  static getStats(req, res) {
    Promise.all([dbClient.nbUsers(), dbClient.nbFiles()])
      .then(([usersCounted, filesCounted]) => {
        res.json({ users: usersCounted, files: filesCounted });
      });
  }
}

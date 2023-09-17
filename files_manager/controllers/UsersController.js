import sha1 from 'sha1';
import Queue from 'bull';
import dbClient from '../utils/db';

const userQueue = new Queue('usersQueue');

export default class UsersController {
  static async postNew(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    if (!email) {
      res.status(400).json({ error: 'Missing email' });
      return;
    }

    if (!password) {
      res.status(400).json({ error: 'Missing password' });
      return;
    }

    const users = await dbClient.db.collection('users');
    users.findOne({ email }, (err, user) => {
      if (user) {
        res.status(400).json({ error: 'Already exists' });
      } else {
        users.insertOne({ email, password: sha1(password) })
          .then((result) => {
            res.status(201).json({ id: result.insertedId, email });
            userQueue.add({ userId: result.insertedId });
          });
      }
    });
  }
}

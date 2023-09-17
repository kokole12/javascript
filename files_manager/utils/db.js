import mongodb from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const uri = `mongodb://${host}:${port}`;
    this.client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    this.client.connect().then(() => {
      this.db = this.client.db(`${database}`);
    }).catch((error) => {
      console.log(error);
    });
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    const collection = this.db.collection('users');
    const count = await collection.countDocuments();
    return count;
  }

  async nbFiles() {
    const collection = this.db.collection('files');
    const count = await collection.countDocuments();
    return count;
  }
}

const dbClient = new DBClient();

export default dbClient;

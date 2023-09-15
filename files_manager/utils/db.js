import mongodb from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_Host || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const databse = process.env.DB_DATABASE || 'files_manager';

    const uri = `mongodb://${host}:${port}/${databse}`;
    this.client = new mongodb.MongoClient(uri, { useUnifiedTopology: true });
    this.client.connect();
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    const db = this.client.db();
    const collection = db.collection('users');
    const count = await collection.countDocuments();
    return count;
  }

  async nbFiles() {
    const db = this.client.db();
    const collection = db.collection('files');
    const count = await collection.countDocuments();
    return count;
  }
}

const dbClient = new DBClient();

export default dbClient;

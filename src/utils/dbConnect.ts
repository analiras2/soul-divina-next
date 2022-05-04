import mongoose from 'mongoose';

const uri = process.env.MONGODB_URL;
const connection = { isConnected: 0 };

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  if (!uri) {
    throw new Error('Please add your Mongo URI to env.local');
  } else {
    const db = await mongoose.connect(uri);

    connection.isConnected = db.connections[0].readyState;
  }
}

export default dbConnect;

import mongoose, { Connection } from 'mongoose';
import { DBM_TYPE, DBM_HOST, PORTM_DB, DBM_NAME } from './config';

const initDbMongo = async (): Promise<void> => {
  try {
    const connection: Connection = await mongoose.createConnection(`${DBM_TYPE}://${DBM_HOST}:${PORTM_DB}/${DBM_NAME}`);
    console.log("Db is Connected!", connection.db?.databaseName!==undefined?connection.db?.databaseName:DBM_NAME);
  } catch (err) {
    console.error(err);
  }
};

export default initDbMongo;

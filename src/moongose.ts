import mongoose, { Connection } from 'mongoose';
import { DBM_TYPE, DBM_HOST, PORTM_DB, DBM_NAME } from './config';

const initDbMongo = async (): Promise<void> => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(`${DBM_TYPE}://${DBM_HOST}:${PORTM_DB}/${DBM_NAME}`);
    console.log("Db is Connected!", DBM_NAME);
  } catch (err) {
    console.error(err);
  }
};

export default initDbMongo;

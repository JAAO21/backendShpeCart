import dotenv from "dotenv"
//module dotenv
dotenv.config();
//config app
export const PORT = process.env.PORT || 4550,
HOST=process.env.HOST,
APP_NAME=process.env.APP_NAME,
JWT_APIKEY=process.env.JWT_APIKEY;


//config morgan
export const MORGAN_LOG_LEVEL = "dev";

//config mongoDb
export const DBM_TYPE = process.env.DBM_TYPE,
  DBM_HOST = process.env.DBM_HOST,
  PORTM_DB = process.env.PORTM_DB,
  DBM_NAME = process.env.DBM_NAME;


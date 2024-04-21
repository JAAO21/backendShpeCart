import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

import main from "./main";
import { MORGAN_LOG_LEVEL } from "./config";
import initDbMongo from "./moongose";
import routes from "./routes";
import { setupSwagger } from "./swagger";
//module express
const app = express();

//middlewares
//module morgan
app.use(morgan(MORGAN_LOG_LEVEL));
//module cors
app.use(cors());
//module lector json
app.use(express.json());
//module lector body
app.use(express.urlencoded({ extended: false }));

//init DbMongo
initDbMongo();
//routes
routes(app)

// Inicializar Swagger
setupSwagger(app);
main(app);

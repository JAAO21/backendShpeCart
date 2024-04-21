import { PORT, HOST, APP_NAME } from "./config";
const main = (app: any) => {
  //liste port express
  app.listen(PORT, () => {
    console.log(`App listening on htpp://${HOST}:${PORT}/${APP_NAME} `);
  });
};

export default main;

import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";


const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//init web routes
initWebRoutes(app);

// const PORT = 8080; #when we don't use line 6 & defied in .env file
app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = "+PORT);
})
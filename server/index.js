import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

import kpiRoutes from "./routes/kpi.js"
import KPI from "./models/KPI.js";
import {kpis} from "./data/data.js"; 

/* Configurations */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/*Routes*/
app.use("/kpi", kpiRoutes);
/* Mongoose setup */

const port = process.env.port || 9000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async() =>{
    app.listen(port, ()=> console.log(`Server running at port ${port}`));
    
})
.catch((err) => console.log(`${err}, did not connect`));
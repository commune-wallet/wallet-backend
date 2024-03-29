import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./routes/index.mjs";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());


app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api", router);

export default app;

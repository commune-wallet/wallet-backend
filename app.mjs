import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./routes/index.mjs";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.use(cookieParser());

const corsOptions = {
  origin: "*", // Replace with your allowed origin(s)
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // Specify the HTTP methods allowed
  allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed request headers
  credentials: true, // Enable sending cookies across different domains
  preflightContinue: false, // Disable preflight requests caching
  optionsSuccessStatus: 200, // Set the response status code for successful OPTIONS requests
};

app.use(cors(corsOptions));

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", router);

export default app;

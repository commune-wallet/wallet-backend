import app from "./app.mjs";
import dotenv from "dotenv";
import dbConnect from "./utils/dbconnect.mjs";

dotenv.config();

dbConnect();
console.log('db')

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

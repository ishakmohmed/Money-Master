const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transactions");

app.use(express.json()); // will allow us to use body parser so i can req.body.xyz in my controllers, idk why i forget this all the time

app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get(
    "*",
    (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); // node path module: from current dir, go to client > build > index.html
    }
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

const express = require("express");
require("dotenv").config();

const app = express();
const port = 8000;

const appRouter = require("./src/router");

const database = require("./src/database/client");
console.log(database);

app.use(express.json());

app.use("/api", appRouter);

app.listen(port, (err) => {
  if (err) console.error("Something went wrong");

  console.log(`Server is running on port ${port}`);
});

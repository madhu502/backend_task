const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./Database/database");

const app = express();

app.use(express.json());
connectDatabase();

dotenv.config();
const PORT = process.env.PORT;

app.use("/api/blog", require("./Routes/blogRoutes"));

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT} !`);
});

module.exports = app;

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const connectDB = require("./Database/DataBase");
const userRoute = require("./Routes/UserRoutes");
const { errorHandler, notFound } = require("./Middleware/ErrorMiddleware");

const app = express();
connectDB();
app.use(cors());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use(userRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});

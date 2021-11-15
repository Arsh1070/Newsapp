const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Database/DataBase");
const userRoute = require("./Routes/UserRoutes");
const { errorHandler, notFound } = require("./Middleware/ErrorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use("/api/users", userRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});

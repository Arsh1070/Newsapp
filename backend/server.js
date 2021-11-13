const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const userRoute = require("./routes/userRoute");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

//app.get("/", (req, res) => {
//res.send("APIS is running now");
//});

app.use("/api/users", userRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});

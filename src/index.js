const express = require("express");
const bodyParser = require("body-parser");
const { StatusCodes } = require("http-status-codes");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const connectToDB = require("./config/db.config");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/ping", (req, res) => {
    res.status(StatusCodes.OK).json({
        message: "Quora Server is alive",
    });
});

app.use("/api", apiRouter);

// Error handler Middleware
app.use(errorHandler);

app.listen(PORT, async (req, res) => {
    console.log(`Quora-Server listenning on ${PORT}`);
    await connectToDB();
    console.log("Successfully connected to db");
});

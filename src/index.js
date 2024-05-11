const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/ping", (req, res) => {
    res.status(200).json({
        message: "Quora Server is alive",
    });
});

app.use("/api", apiRouter);

app.listen(PORT, (req, res) => {
    console.log(`Quora-Server listenning on ${PORT}`);
});

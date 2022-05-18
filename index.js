const express = require("express");
const cors = require("cors");
var app = express();

app.use(cors());
require("./db/mongo");
var productRouter = require("./route/crud");

app.use(express.json());
app.use(productRouter);

app.listen(3000, () => {
    console.log("server is running");
});
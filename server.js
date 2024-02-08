require("dotenv").config();
require("./models/gsm.model").default
const express = require("express");
const app = express();
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req,res) => res.send("Welcome to HewaTell"));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use("/api/gsm", require("./controllers/gsm.controller"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server listening on port " + port));

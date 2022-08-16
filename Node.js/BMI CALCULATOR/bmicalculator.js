const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html");
})

app.post("/bmicalculator.js", (req, res) => {
    var { weight, height } = req.body;
    var bmi =Number(weight)/(Number(height)*Number(height));
    res.send(`<h1>Your BMI is  ${bmi}</h1>`);
})

app.listen(port, (req, res) => {
    console.log(`BMI CALCULATOR Server Started at port no http://localhost:${port}`);
})
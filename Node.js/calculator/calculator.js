const express = require("express");
const bodyParser = require("body-parser")
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true })) // .text() .json() .urlencoded()
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {

    var bodyReq = req.body;
    var num1 = Number.parseInt(bodyReq.num1);
    var num2 = Number.parseInt(bodyReq.num2);

    res.send(`Addition of ${num1} +  ${num2} is ${num1 + num2}`)
})

app.listen(port, () => {
    console.log(`Calculator app listening at port no ${port}`)
})


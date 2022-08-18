const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html")

})


app.post("/", (req, res) => {
    const city_Name = req.body.cityName

    const query = city_Name
    const apiKey = "422a9d165906895c97e78d7b50445f66"
    const units = "metric";
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

    https.get(URL, function (response) {
        // console.log(response.statusCode);

        response.on("data", (d) => {
            const weatherData = JSON.parse(d);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";

            res.write(" <p>The weather is currently " + description + "</p>");
            res.write("<h1>The temperature in " + query + " is  " + temp + " degree Celcius.</h1>");
            res.write(`<img src='${iconUrl}'>`)
            res.send();
        })
    })


})





app.listen(port, function () {
    console.log(`server is running on port ${port}`)
})
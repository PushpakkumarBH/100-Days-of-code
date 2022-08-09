const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){
    const query = req.body.cityName;
    const units = "metric"
    const apiKEY = "5b609a10b1caed5ad07c7807692ed0ad"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units="+ units +"&appid="+ apiKEY +""

    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon
            const imageURL = "https://api.openweathermap.org/img/wn"+ icon+"@2x.png"
            res.write("<p>Weather Description in "+req.body.cityName+" is "+desc+"</p>");
            res.write("<h1> The Temperature at "+req.body.cityName+" is "+ temp +" degrees </h1>");
            res.write("<img src="+ imageURL +">")
            res.send()
        })
    
    })
});

app.listen(3000,function(){
    console.log("Server is running at port 3000.");
})
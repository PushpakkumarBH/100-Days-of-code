const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(port,function(){
    console.log('App Listening at port 3000')
})

app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    result = num1 + num2
    res.send('The addition of two numbers is '+ result)
})
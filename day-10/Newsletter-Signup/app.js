const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
 
app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running at port 3000.");
});

app.get('/', function(req, res){
    res.sendFile(__dirname + "/signup.html")
});

app.post("/",function(req, res){
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const Email = req.body.email;
    console.log(firstName,lastName,Email);
    const data = {
        members:[
            {
                email_address: Email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);
    const url = "https:us9.api.mailchimp.com/3.0/lists/d324be04ed";
    const options = {
        method: "POST",
        auth: "pushpak696@gmail.com:bcdd2f5bd63bf714a8c942899b8f01f9-us9",
    }
    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data)); 

        if (response.statusCode==200){
            res.sendFile(__dirname + "/sucess.html");
        }
        else{
            res.sendFile(__dirname + "/failure.html");
        }
        })
    })
    request.write(jsonData);
    request.end();
});



// API Keys
// bcdd2f5bd63bf714a8c942899b8f01f9-us9

// Unique id
// d324be04ed
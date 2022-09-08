const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption');
const md5 = require("md5");
require('dotenv').config()
app.set('view engine', 'ejs' );
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/userDB");
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
const User = new mongoose.model("User", userSchema);
// Encryption starts here level 2

// const secret = process.env.SECRET;
// userSchema.plugin(encrypt, { secret: secret , encryptedFields: ["password"] });

// encrytpion ends here
// Home route
app.get('/', function(req, res){
    res.render('home');
});
// register route
app.get('/register', function(req, res){
    res.render('register');
});
// Register route
app.get('/login', function(req, res){
    res.render('login');
});
// Register post route
app.post('/register', function(req, res){
    const newUser = new User({
        email: req.body.username,
        password: md5(req.body.password)
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        } else {
            res.render('secrets');
        }
    });
});
// Login post route
app.post('/login', function(req, res){
    const username = req.body.email;
    const password = md5(req.body.password);
    User.findOne({email: username}, function(err, foundUser){ 
        if(err){
            console.log(err);
        } else {
            if(foundUser){
                if (foundUser.password === password){
                    res.render('secrets');
                }
            }
        }
    });
});
// app.get('/secrets', function(req, res){
//     res.render('secrets');
// });
// app.get('/submit', function(req, res){
//     res.render('submit');
// });


// listen to port 3000
app.listen(3000,function(){
    console.log('Server is running at port 3000');
});
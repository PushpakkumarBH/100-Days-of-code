const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session')
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const app = express();
require('dotenv').config()
app.set('view engine', 'ejs' );
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
// code for auth starts here
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// code for auth ends here
mongoose.connect("mongodb://localhost:27017/userDB");
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
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
    User.register({username: req.body.username}, req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.redirect('/register');
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect('/secrets');
            });
        }
    });
});
// Login post route
app.post('/login', function(req, res){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, function(err){  
    if(err){
        console.log(err);
    } else {
        passport.authenticate("local")(req, res, function(){
            res.redirect('/secrets');
        });
    }
});
});
app.get('/secrets', function(req, res){
    if(req.isAuthenticated()){
        res.render('secrets');
    }else{
        res.redirect('/login');
    }
});
// app.get('/submit', function(req, res){
//     res.render('submit');
// });
app.get('/logout',function(req,res){
    req.logout();
    res.redirect('/');
});

// listen to port 3000
app.listen(3000,function(){
    console.log('Server is running at port 3000');
});
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine','ejs');
var items = ['Buy Food','Cook Food','Eat Food'];
app.listen(3000, function(req, res){
    console.log("Server running on port 3000");
});

app.get('/', function(req, res){
    var today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render('list',{kindOfDay: day, newItem: items});
});

app.post('/',function(req, res){
    item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});
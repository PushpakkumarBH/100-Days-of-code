const express = require('express');
const bodyparser = require('body-parser');
const app = express();
var items = ["Buy Food","Cook Food","Eat Food"];

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    var today = new Date();
    var options ={
        weekday : 'long',
        day : 'numeric',
        month: 'long',
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render('list',{KindofDay: day,newListItems: items});
});

app.listen(3000,function(req, res){
    console.log("Server is running at port 3000");
});

app.post('/', function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
app.set('view engine', 'ejs' );
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.listen(3000,function(){
    console.log('Server is running at port 3000');
});

// MongoDB
mongoose.connect('mongodb://localhost:27017/wikiDB');
const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});
const Article = mongoose.model("Article",articleSchema);

app.get('/articles', function(req, res){
    Article.find({},function(err,foundArticles){
        if(!err){
            res.send(foundArticles);
        }
        else{
            res.send(err);
        }
    });
});
app.get('/articles/:articleTitle',function(req, res){
    Article.findOne({title: req.params.articleTitle},function(err,foundArticle){
        if(!err){
            res.send(foundArticle);
        }
        else{
            res.send(err);
        }
    });
});
app.put('/articles/:articleTitle',function(req,res){
    Article.updateOne(
        {title: req.params.articleTitle},
        {title: req.body.title ,content: req.body.content},
        {overwrite: true},
        function(err){
            if(!err){
                res.send("sucess");
            }
            else{
                res.send(err);
            }
        }
    );
});
app.patch('/articles/:articleTitle',function(req,res){
    Article.updateOne(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err){
            if(!err){
                res.send("Successfully updated");
            }else{
                res.send(err);
            }
        }
    );
});
app.delete("/articles/:articleTitle",function(req,res){
    Article.deleteOne(
        {title: req.params.articleTitle},
        function(err){
            if(!err){
                res.send("Successfully Deleted");
            }
            else{
                res.send(err);
            }
        }
    );
});
app.post('/articles',function(req, res){
    const newArticle = new Article({
        title : req.body.title,
        content: req.body.content
    });
    newArticle.save(function(err){
        if(!err){
            res.send("Sucessfully sent post request");
        }
        else{
            res.send(err);
        }
    });
});
app.delete('/articles',function(req,res){
    Article.deleteMany(function(err){
        if(!err){
            res.send("Sucessfully Deleted all the data");
        }
        else{
            res.send(err);
        }
    });
});
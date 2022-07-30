const express = require('express');
const app = express();
const port = 3000

app.get('/', function(req, res) {
  res.send('<h1>Hello World...<h1/>')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})

app.get('/contact',function(req,res){
  res.send('<h1>contact me @ pushpak696@gmail.com</h1>')
})

app.get('/about',function(req,res){
  res.send('<h3>Hi There myself pushpakkumar studying in tumkur i am doing my b.tech in ece</h3>')
})
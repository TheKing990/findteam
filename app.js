var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function (req,res)
{
  res.render("first.ejs");
});

app.get("/signup", function (req,res)
{
  res.render("signup.ejs");
});


app.listen(3000, function(){
  console.log("server has started!");
});

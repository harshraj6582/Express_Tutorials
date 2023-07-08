var express = require('express');
var app = express();
app.get('/',function (req,res){
    res.send("Welcome to the Tutorials")
});
app.listen(5000);
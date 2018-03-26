var express = require("express");
var app =express();


//to serve the content of public directory
app.use(express.static("public"));

app.set("view engine", "ejs");


app.get("/", function(req,res){
 //   var thing = req.params.thing;
    res.render("home");
});


app.get("/fallinlovewith/:thing", function(req,res)  {
   var thing = req.params.thing;
    res.render("love", {thingVar: thing});
    
    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening");
});
var express = require("express");
var app =express();


// "/" => "hi there"
app.get("/", function(req, res) {
   res.send("Hi there");   //the way of responding with some text
}) ;

// "/bye " => "hi there"//

app.get("/bye", function(req, res) {
   res.send("Goodbye");   //the way of responding with some text
}) ;


app.get("/dog", function(req, res) {
   res.send("Gavv");   //the way of responding with some text
}) ;


//app.get("*", function(req,res){
//  res.send("your are star") ;
//});

app.get("/r/:subredditName", function(req,res){
    var subreddit = req.params.subredditName;
   res.send("welcome to " + subreddit  + "  SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title", function(req,res){
    res.send("welcome to the comments page");
});





//Tell express to listen for rerquest(start server)

app.listen(process.env.PORT, process.env.IP,  function() {
    console.log("Server has started");
});



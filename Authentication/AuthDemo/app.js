
var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
passportLocalMongoose     = require("passport-local-mongoose");
    
    
mongoose.connect("mongodb://localhost/auth_demo_app");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




//=============================

// ROUTES
//============================



app.get("/", function(req, res) {
    
  res.render("home") ;
    
});



app.get("/secret", function(req, res) {
    
  res.render("secret") ;
    
});


// Auth routes

//show sign up form
app.get("/register", function(req, res) {
    
  res.render("register") ;
    
});



//handling user sign up
app.post("/register", function(req, res) {
    
    User.register(new User({username: req.body.username}), req.body.password, function(err,user) {
   
               if(err){
                   console.log(err);
                   res.render('register');
                 }
                 passport.authenticate("local")(req, res, function(){ //lcoal is strategy e.g facebook or google
                     
                     res.redirect("/secret");
         
                    });
     
    });

 
});

//LOGIN ROUTES
//show login page
app.get("/login", function(req, res) {
    
  res.render("login") ;
    
});


//show login page
//middleware isrunned before callback fnunction
app.post("/login",  passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login",


}), function(req, res) {
    
 
    
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started.......");
})




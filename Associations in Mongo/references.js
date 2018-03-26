var mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");



var Post = require("./models/post");
var User = require("./models/user");


//post

// var postSchema = new mongoose.Schema({
//     title: String,
//     content: String,
    
// });

// var Post = mongoose.model("Post", postSchema);


//user
//schema setup
// var userSchema = new mongoose.Schema({
//     email: String,
//     name: String,
//     posts:[{
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Post"
        
        
        
//     }]  //array of multiple posts
    
// });

// var User = mongoose.model("User", userSchema);


// User.create({
//     email: "bob@gmail.com",
//     name:"Bob Belcher"
// });


// Post.create({
//     title: "How to cook the best vurger pt.3",
//     content: "dfdfd ovodvfigodifgodfgjoidjgod "
// }, function(err,post) {          
//     User.findOne({email: "bob@gmail.com"}, function(err,foundUser){
//         if(err){
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err,data){
//                      if(err){
//                         console.log(err);
//                      } else {
//                      console.log(data);
//                         }
                     
//                  });
//         }
        
//     });
    
    
// });


// Find user
//find all posts for that user//

//query to find all posts from the user

// User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err,user){
    
//       if(err){
//       console.log(err);
//          } else {
//          console.log(user);
//                         }
                     
// });
var mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");



//post

var postSchema = new mongoose.Schema({
    title: String,
    content: String,
    
});

var Post = mongoose.model("Post", postSchema);


//user
//schema setup
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts:[postSchema]  //array of multiple posts
    
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "charlie.brown@gmail.com",
//     name: "Charlie Brown"
// });


// newUser.posts.push({
//     title: "How to brepolyjuice potion",
//     content:"Just kidding. Go to potions class to learn it!"
    
    
    
// });

// newUser.save(function(err, user){
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(user);
//             }
// });


// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });



//  newPost.save(function(err, post){
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(post);
//             }
// });



//retrieve single user from database
User.findOne({name: "Charlie Brown"}, function(err,user){
      if(err){
      // console.log(err);
         } else {
        user.posts.push({
                    title: "3 Things I really hate",
                    content: "Voldemort  Voldemort Voldemort"
        });
                 
                 user.save(function(err,user){
                     if(err){
                        console.log(err);
                     } else {
                     console.log(user);
                        }
                     
                 });
                 
            }
    
    });


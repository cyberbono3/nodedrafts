
var mongoose    = require("mongoose");


mongoose.connect("mongodb://localhost/blog_demo_2");





var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        
        
        
    }]  //array of multiple posts
    
});

var User = mongoose.model("User", userSchema);


module.exports = User;
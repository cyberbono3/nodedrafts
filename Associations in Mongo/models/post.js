var mongoose    = require("mongoose");


mongoose.connect("mongodb://localhost/blog_demo_2");


var postSchema = new mongoose.Schema({
    title: String,
    content: String,
    
});


var Post = mongoose.model("Post", postSchema);

//return module for a file
module.exports = Post;
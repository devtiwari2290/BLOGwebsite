const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})


const BlogCollection = mongoose.model('blog',blogSchema);

module.exports = BlogCollection;
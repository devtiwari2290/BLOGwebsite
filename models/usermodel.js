const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({


    username:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:String,

})

userSchema.plugin(plm)

const UserCollection = mongoose.model('user',userSchema)

module.exports = UserCollection;
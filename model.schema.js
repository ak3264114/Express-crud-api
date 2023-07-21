const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name : {
        type : String
    },
    Email : {
        type : String,
        require : true,
        unique : true,
    },
    MobNo : {
        type : Number,
        require : true,
    }

})

module.exports = mongoose.model("Userdb" , userSchema)
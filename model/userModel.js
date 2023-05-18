const {Schema, model} = require("mongoose");


const userSchema = new Schema({
    userName:{
        type:String,
        require:[true, "Please add the userName"]
    },
    email:{
        type:String,
        require:[true, "Please add the Email address"],
        unique:[true, "Email address Already Exists"]
    },
    password:{
        type:String,
        require:[true, "Please add the Password"]
    },
},{
    timestamps:true
})

module.exports = model("user", userSchema)
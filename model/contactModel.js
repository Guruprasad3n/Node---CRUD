const {Schema, model} = require("mongoose");

const contactSchema = new Schema({
name:{
    type:String,
    require:[true, "Please add the Contact Name"]
},
email:{
    type:String,
    require:[true, "Please add the Contact Email Address"]
},
phone:{
    type:String,
    require:[true, "Please add the Contact Phone Number"]
},



},{
    timestamps:true,
})


module.exports  = model("Contact", contactSchema)
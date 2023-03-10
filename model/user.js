import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required : [true, "Please enter name"]
    },
    email : {
        type:String,
        required : [true, "Please enter name"],
        unique : true
    }
})

export const User = mongoose.model("User", userSchema)

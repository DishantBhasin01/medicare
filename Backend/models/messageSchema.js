import mongoose from "mongoose";
import validator from "validator";

const messageSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3,"First name must contain atleast 3 character"],
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3,"Last name must contain atleast 3 character"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail,"Please provide a valid email"],
    },
    phone:{
        type: String,
        required: true,
        minLength: [10,"Phone number must contain 10 digits"],
        maxLength: [10,"Phone number must contain 10 digits"],
    },
    message:{
        type: String,
        required: true,
        minLength: [10,"Message must contain atleast 10 characters"],
    },
})

export const Message=mongoose.model("message",messageSchema);
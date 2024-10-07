import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    phone: { 
        type: String, 
        required: true, 
        unique: true 
    },
    message : { 
        type: String,
        required: true
    } 
}, {timestamp: true});

const contactModel = mongoose.model('conatctModel', contactSchema);

export default contactModel;


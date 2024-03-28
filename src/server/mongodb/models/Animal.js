import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    }, 
    breed : {
        type : String,
        required : true,
    }, 
    owner : {
        type : String,
        required : true,
        ref : 'User'
    },
    hoursTrained : {
        type : Number,
        required : true,
    },
    profilePicture : {
        type : String,
        required : true,
    },
});

export default mongoose.models?.Animal || mongoose.model("Animal", animalSchema)
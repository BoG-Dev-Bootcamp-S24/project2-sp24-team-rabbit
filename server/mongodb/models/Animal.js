import mongoose from 'mongoose';

const Animal = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true
    },
    breed : {
        type : String,
        required : true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    hoursTrained : {
        type : Number,
        required : true
    },
    profilePicture : {
        type : String,
        required : true
    }
});

export default mongoose.model("Animal", animalSchema);
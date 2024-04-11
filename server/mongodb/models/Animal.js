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
    hoursTrained : {
        type : Number,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
});

export default mongoose.models?.Animal || mongoose.model("Animal", animalSchema)
import mongoose from "mongoose";

const trainingLogSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectID,
        required : true,
        ref : 'User'
    },
    animal : {
        type : mongoose.Schema.Types.ObjectID,
        required : true,
        ref : 'Animal'
    },
    title : {
        type : String,
        required : true,
    }, 
    date : {
        type : Date,
        required : true,
    }, 
    description : {
        type : String,
        required : true,
    },
    hours : {
        type : Number,
        required : true,
    },
});

export default mongoose.models?.TrainingLog || mongoose.model("TrainingLog", trainingLogSchema)
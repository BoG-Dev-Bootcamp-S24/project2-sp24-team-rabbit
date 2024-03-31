
import mongoose from 'mongoose'

const trainingLogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    animalId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    }
});

export default mongoose.models?.TrainingLog || mongoose.model("TrainingLog", trainingLogSchema);
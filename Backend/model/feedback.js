import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: String
}, { timestamps: true });

export const Feedback = mongoose.model('Feedback', FeedbackSchema);

import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    instructor: String,
    image: String,  // thumbnail or course image

    // New fields
    enrolledCount: { type: Number, default: 0 }, // how many students enrolled
    oldPrice: { type: Number, required: true },  // original price
    offerPrice: { type: Number, required: true } // discounted price
}, { timestamps: true });

export const Course = mongoose.model('Course', CourseSchema);

import mongoose from "mongoose";

const GradeSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  projectsCompleted: { type: Number, default: 0 },
  totalMarks: { type: Number, required: true },
  grade: { type: String, enum: ['A', 'B', 'C', 'D', 'F'], required: true }
}, { timestamps: true });

export const Grade = mongoose.model('Grade', GradeSchema);

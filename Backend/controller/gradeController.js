import {Grade} from "../model/grades.js";

// Create a new grade
export const createGrade = async (req, res) => {
  try {
    const grade = new Grade(req.body);
    await grade.save();
    res.status(201).json({ message: "Grade created successfully", grade });
  } catch (error) {
    res.status(400).json({ message: "Error creating grade", error: error.message });
  }
};

// Get all grades
export const getGrades = async (req, res) => {
  try {
    const grades = await Grade.find().populate("course");
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: "Error fetching grades", error: error.message });
  }
};

// Get a single grade by ID
export const getGradeById = async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id).populate("course");
    if (!grade) return res.status(404).json({ message: "Grade not found" });
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json({ message: "Error fetching grade", error: error.message });
  }
};

// Update grade by ID
export const updateGrade = async (req, res) => {
  try {
    const grade = await Grade.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!grade) return res.status(404).json({ message: "Grade not found" });
    res.status(200).json({ message: "Grade updated successfully", grade });
  } catch (error) {
    res.status(400).json({ message: "Error updating grade", error: error.message });
  }
};

// Delete grade by ID
export const deleteGrade = async (req, res) => {
  try {
    const grade = await Grade.findByIdAndDelete(req.params.id);
    if (!grade) return res.status(404).json({ message: "Grade not found" });
    res.status(200).json({ message: "Grade deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting grade", error: error.message });
  }
};

import { Course } from "../model/courses.js";
import { v2 as cloudinary } from "cloudinary";

// ✅ Create a new course

export const createCourse = async (req, res) => {
    try {
        const { title, description, instructor, oldPrice, offerPrice } = req.body;

        let imageUrl = req.file ? req.file.path : ""; // Cloudinary gives URL directly

        const course = new Course({
            title,
            description,
            instructor,
            image: imageUrl,
            oldPrice,
            offerPrice,
            enrolledCount: 0, // matches schema
        });

        await course.save();
        res.status(201).json({ success: true, message: "Course created", course });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// ✅ Get all courses
export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ success: true, courses });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// ✅ Get single course by ID
export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }
        res.status(200).json({ success: true, course });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// ✅ Update course
export const updateCourse = async (req, res) => {
    try {
        const { title, description, oldPrice, offerPrice } = req.body;

        let updateData = { title, description, oldPrice, offerPrice };

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "student_portal/courses",
            });
            updateData.image = result.secure_url;
        }

        const course = await Course.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
        });

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        res.status(200).json({ success: true, message: "Course updated", course });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// ✅ Delete course
export const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }
        res.status(200).json({ success: true, message: "Course deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

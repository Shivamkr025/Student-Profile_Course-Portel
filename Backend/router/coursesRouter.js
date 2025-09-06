import express from "express";
import { createCourse, getCourses } from "../controller/coursesController.js";

import {upload} from "../config/cloudinaryConfig.js";

const router = express.Router();

router.post("/create/courses", upload.single("image"), createCourse);
router.get("/get/courses", getCourses);
// router.get("/:id", getCourseById);
// router.put("/:id", upload.single("image"), updateCourse);
// router.delete("/:id", deleteCourse);

export default router;

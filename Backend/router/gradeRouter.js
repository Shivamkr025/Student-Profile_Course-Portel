import express from "express";
import { createGrade, getGrades } from "../controller/gradeController.js";

const router = express.Router();

router.post("/create-grade", createGrade);
router.get("/grade", getGrades);

export default router;

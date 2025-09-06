import express from "express";
import {
  createFeedback,
  getFeedbacks,
} from "../controller/feedbackController.js";

const router = express.Router();

router.post("/create/feedback", createFeedback);
router.get("/get/feedback", getFeedbacks);

export default router;

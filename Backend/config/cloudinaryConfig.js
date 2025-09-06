import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "student_portal/courses",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 1200, crop: "limit" }],
  },
});

const parser = multer({ storage });
const upload = parser;

export { upload, cloudinary };

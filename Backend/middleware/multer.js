// // middlewares/multer.js
// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import cloudinary from "../config/cloudinaryConfig.js"; // 👈 must end with .js

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "student_portal/courses",
//     allowed_formats: ["jpg", "jpeg", "png"],
//     transformation: [{ width: 1200, crop: "limit" }],
//   },
// });

// const upload = multer({ storage });

// export default upload;

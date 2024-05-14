import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

// Define storage for the uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // generate a unique filename
  },
});

// Create multer instance with the storage options
const upload = multer({ storage: storage });

// Handle file upload
router.post("/", upload.single("image"), (req, res) => {
    try {
        
        if (!req.file) {
          return res.status(400).send({
            success: false,
            status_code: 400,
            message: "No file uploaded",
          });
        }
      
        // Construct the file location URL
        const fileLocation = path.join(__dirname, "..", req.file.path); // Assuming 'uploads' directory is in the parent directory
      
        // Send back the file location as response
        return res.status(200).send({
          success: true,
          status_code: 200,
          data: { location: fileLocation },
          message: "File uploaded successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: true,
            status_code: 500,
            message: "Something went wrong",
          });
    }
});

export default router;

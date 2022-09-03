const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const uploadHandler = (req, res) => {
    res.status(200).json({
        status: "success",
        data: req.file.filename,
        message: "Upload Image Success",
    });
}

module.exports = {
    upload,
    uploadHandler
}
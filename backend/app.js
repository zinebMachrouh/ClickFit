const express = require('express');
const multer = require('multer');
const cors = require('cors');

const path = require('path');
const app = express();

app.use(cors());


const uploadFolder = path.join(__dirname, 'images');
const storage = multer.diskStorage({
  destination: uploadFolder,
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

app.use(express.static('frontend'));

app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ message: 'Image uploaded successfully', file: req.file });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

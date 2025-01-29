const express = require('express');
const multer = require('multer');
const cors = require('cors');

const path = require('path');
const mysql = require('mysql2');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(cors());

const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'click_fit',
});
  
db.connect(err => {
if (err) {
    console.error('Database connection error:', err);
} else {
    console.log('Connected to MySQL database.');
}
});

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

app.post('/add-user', express.json(), (req, res) => {
    const { email, password, type , active} = req.body;
  
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ message: 'Failed to hash password' });
      }
  
      const query = 'CALL addUser(?, ?, ?, ?)';
      const preparedQuery = db.format(query, [email, hashedPassword, type, active]);
  
      db.query(preparedQuery, (err, result) => {
        if (err) {
          console.error('Error adding user:', err);
          res.status(500).json({ message: 'Failed to add user' });
        } else {
          res.json({ message: 'User added successfully' });
        }
      });
    });
  }); 

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

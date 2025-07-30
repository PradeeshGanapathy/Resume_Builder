const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://Mugesh129:Ruthvi22@test.loa9o.mongodb.net/?retryWrites=true&w=majority&appName=Test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// User schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  personalInfo: {
    fullname: String,
    contactInfo: {
      phoneNumber: Number,
      email: String,
      linkedIn: String,
      github: String,
    },
    address: String,
    professionalTitle: String
  },
  educationalInfo: {
    degree: String,
    institutionName: String,
    city: String,
    courseDuration: Number,
    gradeCGPA: Number,
    internship: String
  },
  projectInfo: {
    projectTitle: String,
    projectDescription: String,
    technologiesUsed: [String],
    githubLink: String,
    duration: Number
  },
  skills: {
    technicalSkill: [String],
    softSkill: [String]
  },
  hobbiesLanguage: {
    personalIntrest: [String],
    languageKnown: [String]
  }
});

// Model
const User = mongoose.model('User', userSchema);

// POST route to handle user creation
app.post('/create-user', async (req, res) => {
  try {
    const userData = new User(req.body);
    await userData.save();
    res.status(201).send('User created successfully');
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).send('Error creating user');
  }
});

// POST route to handle login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username, password });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      res.json({
        id: user._id,
        username: user.username,
        personalInfo: user.personalInfo,
        educationalInfo: user.educationalInfo,
        projectInfo: user.projectInfo,
        skills: user.skills,
        hobbiesLanguage: user.hobbiesLanguage,
      });
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  });
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

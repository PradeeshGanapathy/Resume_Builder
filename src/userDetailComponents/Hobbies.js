import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

const Hobbies = ({ tempJson, setTempJson , setUserData , userData}) => {
  const [newHobbies, setNewHobbies] = useState("");
  const [newLanguage,setNewLanguage] = useState("");

  const handleAddHobbies = (key) => {
    if (newHobbies.trim() !== "") {
      setTempJson((prev) => ({
        ...prev,
        hobbiesLanguage: {
           ...prev.hobbiesLanguage,
          [key]: [...prev.hobbiesLanguage.personalIntrest, newHobbies],
        },
      }));
      console.log(tempJson);
      setNewHobbies("");
    }
  };
  const handleAddLanguage = (key) => {
    if (newLanguage.trim() !== "") {
      setTempJson((prev) => ({
        ...prev,
        hobbiesLanguage: {
           ...prev.hobbiesLanguage,
          [key]: [...prev.hobbiesLanguage.languageKnown, newLanguage],
        },
      }));
      console.log(tempJson);
      setNewLanguage("");
    }
  };
  localStorage.setItem("tempData",JSON.stringify(tempJson));

const handleAdd = async () => {
  try {
    const response = await axios.post('http://localhost:5000/create-user', tempJson);
    console.log('User data saved successfully:', response.data);
    setUserData((prev) => ({
      ...prev,
      tempJson,
    }));
    alert('Account Created');
    setTempJson({
      username: "",
      password: "",
      personalInfo: {
        fullname: "",
        contactInfo: {
          phoneNumber: null,
          email: "",
          linkedIn: "",
          github: "",
        },
        address: "",
        professionalTitle: "",
      },
      educationalInfo: {
        degree: "",
        institutionName: "",
        city: "",
        courseDuration: null,
        gradeCGPA: null,
        internship: "",
      },
      projectInfo: {
        projectTitle: "",
        projectDescription: "",
        technologiesUsed: [],
        githubLink: "",
        duration: null,
      },
      skills: {
        technicalSkill: [],
        softSkill: [],
      },
      hobbiesLanguage: {
        personalIntrest: [],
        languageKnown: [],
      },
      intrestedDomain: {
        domain: "",
      },
    });
  } catch (error) {
    console.error('Error saving user data:', error);
    alert('Failed to create account. Please try again.');
  }
};
  
  return (
    <div className='user_details'>
      <h3>Hobbies & Languages</h3>
      <span>
        <label>Personal Intrest</label>
        <input
        type='text'
        id='personalintrest'
        value={newHobbies}
        onChange={(e) => setNewHobbies(e.target.value)}
        />
        <button onClick={()=>{handleAddHobbies('personalIntrest')}}>+</button>
      </span>
      <span>
        <label>Language Known</label>
        <input
        type='text'
        id='languageknown'
        value={newLanguage}
        onChange={(e)=>{setNewLanguage(e.target.value)}}
        />
        <button onClick={()=>{handleAddLanguage('languageKnown')}}>+</button>
      </span>
      
      <span>
        <Link to="/signup/skills">Back</Link>
        <Link to="/login" onClick={handleAdd}>Create Account</Link>
      </span>
    </div>
  )
}

export default Hobbies
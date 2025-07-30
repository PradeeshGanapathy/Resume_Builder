import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Login from "./userDetailComponents/Login";
import Education from "./userDetailComponents/Education";
import PersonalInfo from "./userDetailComponents/PersonalInfo";
import Project from "./userDetailComponents/Project";
import Skills from "./userDetailComponents/Skills";
import Hobbies from "./userDetailComponents/Hobbies";
import Header from "./Header";
import HomePage from "./userDetailComponents/HomePage";
import Account from './userDetailComponents/Account';

function App() {
  const [account, setAccount] = useState("Login/SignUp");
  const [tempJson, setTempJson] = useState({
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
  const [userData , setUserData] = useState({tempJson});

  return (
    <>
      <Header account={account} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login setAccount={setAccount} setUserData={setUserData}/> } />
        <Route path="/signup/createaccount" 
        element={<Account tempJson={tempJson} 
        setTempJson={setTempJson} />}
        />
        <Route
          path="/signup/personalinfo"
          element={<PersonalInfo tempJson={tempJson} setTempJson={setTempJson} />}
        />
        <Route
          path="/signup/education"
          element={<Education tempJson={tempJson} setTempJson={setTempJson} />}
        />
        <Route
          path="/signup/projects"
          element={<Project tempJson={tempJson} setTempJson={setTempJson} />}
        />
        <Route
          path="/signup/skills"
          element={<Skills tempJson={tempJson} setTempJson={setTempJson} />}
        />
        <Route
          path="/signup/hobbies"
          element={<Hobbies tempJson={tempJson} setTempJson={setTempJson} setUserData={setUserData} userData={userData}/>}
        />
        <Route path="/home" element={<HomePage userData={userData}/>} />
      </Routes>
    </>
  );
}

export default App;

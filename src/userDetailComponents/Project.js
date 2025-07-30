import React, { useState } from "react";
import { Link } from "react-router-dom";

const Project = ({ tempJson, setTempJson }) => {
  const [newTechnology, setNewTechnology] = useState("");

  const handleChange = (key, value) => {
    setTempJson((prev) => ({
      ...prev,
      projectInfo: {
        ...prev.projectInfo,
        [key]: value,
      },
    }));
  };

  const handleAddTechnology = () => {
    if (newTechnology.trim() !== "") {
      setTempJson((prev) => ({
        ...prev,
        projectInfo: {
           ...prev.projectInfo,
          technologiesUsed: [...prev.projectInfo.technologiesUsed, newTechnology],
        },
      }));
      console.log(tempJson);
      setNewTechnology("");
    }
  };

  return (
    <div className="project user_details">
      <h3>Project Details</h3>
      <span>
        <label>Project Title</label>
        <input
          type="text"
          value={tempJson.projectInfo.projectTitle}
          onChange={(e) => handleChange("projectTitle", e.target.value)}
        />
      </span>
      <span>
        <label>Project Description</label>
        <textarea
          value={tempJson.projectInfo.projectDescription}
          onChange={(e) => handleChange("projectDescription", e.target.value)}
        ></textarea>
      </span>
      <span>
        <label>Technology Used</label>
        <input
          type="text"
          value={newTechnology}
          onChange={(e) => setNewTechnology(e.target.value)}
        />
        <button onClick={handleAddTechnology}>+</button>
        <ul style={{display:"flex"}}>
          {tempJson.projectInfo.technologiesUsed.map((tech, index) => (
            <li key={index} style={{backgroundColor:"grey",borderRadius:"15px",padding:"5px",listStyle:'none'}}>{tech}</li>
          ))}
        </ul>
      </span>
      <span>
        <label>Github Link</label>
        <input
          type="url"
          value={tempJson.projectInfo.githubLink}
          onChange={(e) => handleChange("githubLink", e.target.value)}
        />
      </span>
      <span>
        <label>Time Duration (months)</label>
        <input
          type="number"
          value={tempJson.projectInfo.duration || ""}
          onChange={(e) => handleChange("duration", e.target.value)}
        />
      </span>
      <span>
        <Link to="/signup/education">Back</Link>
        <Link to="/signup/skills">Next</Link>
      </span>
    </div>
  );
};

export default Project;

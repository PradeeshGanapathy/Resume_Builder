import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

const Skills = ({ tempJson, setTempJson }) => {
  const [newTechnology, setNewTechnology] = useState("");
  const [newSkill,setNewSkill] = useState("")

  const handleAddTechnology = (key) => {
    if (newTechnology.trim() !== "") {
      setTempJson((prev) => ({
        ...prev,
        skills: {
           ...prev.skills,
          [key]: [...prev.skills.technicalSkill, newTechnology],
        },
      }));
      console.log(tempJson);
      setNewTechnology("");
    }
  };
  const handleAddSkill = (key) => {
    if (newSkill.trim() !== "") {
      setTempJson((prev) => ({
        ...prev,
        skills: {
           ...prev.skills,
          [key]: [...prev.skills.softSkill, newSkill],
        },
      }));
      console.log(tempJson);
      setNewSkill("");
    }
  };
  return (
    <div className='user_details'>
      <h3>Skills</h3>
      <span>
        <label>Technical Skills</label>
        <input
        type='text'
        id='techskill'
        value={newTechnology}
        onChange={(e) => setNewTechnology(e.target.value)}
        />
        <button onClick={()=>{handleAddTechnology('technicalSkill')}}>+</button>
        <ul style={{display:"flex"}}>
          {tempJson.skills.technicalSkill.map((tech, index) => (
            <li key={index} style={{backgroundColor:"grey",borderRadius:"15px",padding:"5px",listStyle:'none'}}>{tech}</li>
          ))}
        </ul>
      </span>
      <span>
        <label>Soft Skills</label>
        <input
        type='text'
        id='softskills'
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        />
        <button onClick={() => {handleAddSkill('softSkill')}}>+</button>
        <ul style={{display:"flex"}}>
          {tempJson.skills.softSkill.map((tech, index) => (
            <li key={index} style={{backgroundColor:"grey",borderRadius:"15px",padding:"5px",listStyle:'none'}}>{tech}</li>
          ))}
        </ul>
      </span>
      
      <span>
        <Link to="/signup/projects">Back</Link>
        <Link to="/signup/hobbies">Next</Link>
      </span>

    </div>
  )
}

export default Skills
import React from 'react';
import {Link} from 'react-router-dom'

const Education = ({ tempJson, setTempJson }) => {
  const handleChange = (key , value) => {
    setTempJson((prev)=>({
      ...prev,
      educationalInfo:{
        ...prev.educationalInfo,
        [key]:value,
      },
    }))
  }
  return (
    <div className="education_info user_details">
      <h3>Education Information</h3>
      <span>
        <label>Degree</label>
        <input
        type="text"
        value={tempJson.educationalInfo.degree}
        onChange={(e)=>{handleChange('degree',e.target.value)}}
        />
      </span>
      <span>
        <label>Institution Name</label>
        <input
        type="text"
        value={tempJson.educationalInfo.institutionName}
        onChange={(e)=>{handleChange('institutionName',e.target.value)}}
        />
      </span>
      <span>
        <label>city</label>
        <input
        type="text"
        value={tempJson.educationalInfo.city}
        onChange={(e)=>{handleChange('city',e.target.value)}}
        />
      </span>
      <span>
        <label>Duration</label>
        <input
        type="number"
        value={tempJson.educationalInfo.courseDuration}
        onChange={(e)=>{handleChange('courseDuration',e.target.value)}}
        />
      </span>
      <span>
        <label>Grade/CGPA</label>
        <input
        type="number"
        value={tempJson.educationalInfo.gradeCGPA}
        onChange={(e)=>{handleChange('gradeCGPA',e.target.value)}}
        />
      </span>
      <span>
        <label>Internship</label>
        <input
        type="text"
        value={tempJson.educationalInfo.internship}
        onChange={(e)=>{handleChange('internship',e.target.value)}}
        />
      </span>
      
      <span>
        <Link to="/signup/personalinfo">Back</Link>
        <Link to="/signup/projects">Next</Link>
      </span>
    </div>
  )
}

export default Education
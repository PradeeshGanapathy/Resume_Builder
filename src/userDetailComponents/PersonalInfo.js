import React from 'react';
import {Link} from 'react-router-dom';

const PersonalInfo = ({ tempJson, setTempJson }) => {
  const handleChange = (key , value) => {
    setTempJson((prev)=>({
      ...prev,
      personalInfo:{
        ...prev.personalInfo,
        [key]:value,
      },
    }))
  }
  const handleNestedChange = (parentKey, childKey, value) => 
    setTempJson((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [parentKey]: {
          ...prev.personalInfo[parentKey],
          [childKey]: value,
        },
      },
    }));
  return (
    <div className="personal_info user_details">
      <h3>Personal Info</h3>
      <span>
        <label>FullName : </label>
        <input 
          type='text'
          id='fullname'
          name='fullname'
          value={tempJson.personalInfo.fullname}
          onChange={(e)=>{handleChange('fullname',e.target.value)}}
          />
      </span>
      <span>
        <label>Description</label>
        <textarea 
        value={tempJson.personalInfo.professionalTitle}
        onChange={(e)=>{handleChange('professionalTitle',e.target.value)}}
        ></textarea>
      </span>
      <span>
        <label>phone Number</label>
        <input 
        value={tempJson.personalInfo.contactInfo.phoneNumber}
        onChange={(e)=>{handleNestedChange('contactInfo','phoneNumber',e.target.value)}}
        />
      </span>
      <span>
        <label>Email Address</label>
        <input
        value={tempJson.personalInfo.contactInfo.email}
        onChange={(e)=>{handleNestedChange('contactInfo','email',e.target.value)}}
        />
      </span>
      <span>
        <label>LinkedIn profile</label>
        <input
        value={tempJson.personalInfo.contactInfo.linkedIn}
        onChange={(e)=>{handleNestedChange('contactInfo','linkedIn',e.target.value)}}
        />
      </span>
      <span>
        <label>GitHub link</label>
        <input
        value={tempJson.personalInfo.contactInfo.github}
        onChange={(e)=>{handleNestedChange('contactInfo','github',e.target.value)}}
        />
      </span>
      <span>
        <label>Address</label>
        <textarea
        value={tempJson.personalInfo.address}
        onChange={(e)=>{handleChange('address',e.target.value)}}
        ></textarea>
      </span>
      <span >
        <Link to="/signup/createaccount">Back</Link>
        <Link to="/signup/education" onClick={()=>{console.log(tempJson)}}>Next</Link>
      </span>
    </div>
  )
}

export default PersonalInfo
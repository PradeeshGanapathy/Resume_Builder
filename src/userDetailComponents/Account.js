import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Account = ({ tempJson, setTempJson }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { username, email, password, confirmPassword } = formData;

    // Validation logic
    if (!username.trim()) {
      setErrors('Username is required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors('Invalid email address.');
      return;
    }

    if (password.length < 8) {
      setErrors('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrors('Passwords do not match.');
      return;
    }

    if (password === '' || email === '' || username === ''){
        setErrors('need to fill the required field');
        return;
    }

    setErrors('');
    setTempJson({
      ...tempJson,
      username,
      password,
      personalInfo: {
        ...tempJson.personalInfo,
        contactInfo: {
          ...tempJson.personalInfo.contactInfo,
          email,
        },
      },
    });

    // Reset form after submission
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    alert('Account created successfully!');
  };

  return (
    <div className="user_details">
        <h2>Create Account</h2>
        <span>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </span>
        <span>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </span>
        <span>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </span>
        <span>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </span>
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        <span >
            <Link to="/">Back</Link>
            <Link to={!errors ? "/signup/personalinfo" : "/signup/createaccount"} onClick={()=>{handleSubmit(); console.log(tempJson)}}>Next</Link>
        </span>
    </div>
  );
};

export default Account;

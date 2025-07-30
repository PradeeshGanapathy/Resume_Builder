import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="main_container">
      <div className="welcome_container">
        <section className="welcome">
          <h1>Welcome!</h1>
          <p>Creating a professional, polished resume has never been easier. Whether you're just starting your career or looking to update your existing resume, our intuitive platform helps you craft a standout document in minutes. Tailor your experience, skills, and achievements to make the best impression with potential employers. Start building your future today!</p>
          <Link to='/login' className= "get_started">Get started</Link>
        </section>
        <section className="img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETn2ehY-3GDJUqs0z1Unvc3PnWllkRbu-0A&s" alt="img"/>
        </section>
      </div>
      <div className="about">
        <h1>About</h1>
        <p>The Digital Resume Builder is a user-friendly platform designed to help job seekers create professional resumes quickly and easily. Whether you're crafting your first resume or updating an existing one, our tool offers a seamless experience with customizable templates, tips, and a variety of formatting options.</p>
        
        <h3>Key features include:</h3>
        <ul>
          <li><strong>Pre-built templates:</strong> Choose from a variety of modern and professional templates.</li>
          <li><strong>Easy customization:</strong> Personalize your resume with ease by adding your experience, skills, education, and achievements.</li>
          <li><strong>Job-specific recommendations:</strong> Get suggestions for tailoring your resume to different roles and industries.</li>
          <li><strong>Instant export:</strong> Download your resume in PDF format, ready to share with potential employers.</li>
        </ul>
        
        <p>Our goal is to empower you to create a resume that highlights your strengths and helps you stand out in today's competitive job market. Start building your career today with the Digital Resume Builder!</p>

      </div>
    </div>
  )
}

export default Welcome

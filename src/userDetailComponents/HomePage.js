import React, { useState } from "react";
import Resume from "./Resume";

const HomePage = ({ userData }) => {

  // **Grid-Based Style Objects**
  const styles = {
    sunriseStyle: {
      resumeContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#FFEDD5",
        maxWidth: "1000px",
        margin: "auto",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      },
      heading: {
        fontSize: "2.5em",
        textAlign: "center",
        marginBottom: "15px",
        color: "#FF4500",
      },
      section: {
        padding: "15px",
        backgroundColor: "#FFDAB9",
        margin: "10px 0",
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      },
      sectionTitle: {
        fontSize: "1.8em",
        color: "#FF4500",
        marginBottom: "10px",
      },
      downloadButton: {
        padding: "12px 18px",
        backgroundColor: "#FF4500",
        color: "#ffffff",
        borderRadius: "8px",
        cursor: "pointer",
        display: "block",
        margin: "20px auto",
      },
    },
    modernStyle: {
      resumeContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        maxWidth: "1000px",
        margin: "auto",
        borderRadius: "15px",
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
      heading: {
        fontSize: "2.6em",
        textAlign: "center",
        marginBottom: "15px",
        color: "#333333",
      },
      section: {
        padding: "20px",
        backgroundColor: "#ffffff",
        margin: "15px 0",
        borderRadius: "10px",
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
      },
      sectionTitle: {
        fontSize: "1.9em",
        color: "#333333",
        marginBottom: "12px",
      },
      downloadButton: {
        padding: "14px 24px",
        backgroundColor: "#333333",
        color: "#ffffff",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        display: "block",
        margin: "20px auto",
      },
    },
    resumeStyle : {
      resumeContainer: {
        padding: "20px",
        margin: "20px auto",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Roboto', sans-serif",
        maxWidth: "800px",
        lineHeight: "1.6",
      },
      heading: {
        fontSize: "2em",
        fontWeight: "bold",
        textAlign: "center",
        color: "#2C3E50",
        marginBottom: "10px",
      },
      section: {
        marginBottom: "20px",
        padding: "10px 0",
        borderBottom: "1px solid #E0E0E0",
      },
      sectionTitle: {
        fontSize: "1.4em",
        fontWeight: "600",
        color: "#34495E",
        marginBottom: "8px",
      },
      paragraph: {
        margin: "4px 0",
        fontSize: "1em",
        color: "#555555",
      },
      downloadButton: {
        display: "block",
        margin: "20px auto",
        padding: "10px 20px",
        backgroundColor: "#2980B9",
        color: "#ffffff",
        border: "none",
        borderRadius: "5px",
        fontSize: "1em",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "background-color 0.3s",
      },
      downloadButtonHover: {
        backgroundColor: "#1A5276",
      },
    },
    minimalStyle: {
      resumeContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        backgroundColor: "#fafafa",
        maxWidth: "900px",
        margin: "auto",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
      heading: {
        fontSize: "2.2em",
        textAlign: "center",
        marginBottom: "15px",
        color: "#000000",
      },
      section: {
        padding: "12px",
        backgroundColor: "#ffffff",
        margin: "8px 0",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      },
      sectionTitle: {
        fontSize: "1.6em",
        color: "#000000",
        marginBottom: "10px",
      },
      downloadButton: {
        padding: "10px 15px",
        backgroundColor: "#000000",
        color: "#ffffff",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        display: "block",
        margin: "20px auto",
      },
    },
    gridStyle : {
      resumeContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)", // Creates a 12-column grid
        gap: "16px", // Space between grid items
        padding: "20px",
        backgroundColor: "#f9f9f9",
        maxWidth: "900px",
        margin: "auto",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
      heading: {
        gridColumn: "span 12", // Spans the entire width
        fontSize: "2em",
        textAlign: "center",
        marginBottom: "20px",
        color: "#333333",
      },
      section: {
        gridColumn: "span 12", // Each section spans the full width
        padding: "15px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      sectionTitle: {
        fontSize: "1.4em",
        color: "#222222",
        marginBottom: "12px",
        fontWeight: "bold",
      },
      contactSection: {
        gridColumn: "span 6", // Contact info spans half the width
      },
      educationSection: {
        gridColumn: "span 6", // Education info spans half the width
      },
      projectSection: {
        gridColumn: "span 12", // Project info spans the full width
      },
      skillsSection: {
        gridColumn: "span 6", // Skills span half the width
      },
      hobbiesSection: {
        gridColumn: "span 6", // Hobbies span half the width
      },
      downloadButton: {
        gridColumn: "span 12", // Button spans the full width
        padding: "12px 20px",
        backgroundColor: "#007bff",
        color: "#ffffff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        textAlign: "center",
        margin: "20px 0",
      },
    },   
  };
  const [style, setStyle] = useState(styles.sunriseStyle);
  // List of Styles for Dynamic Selection
  const styleList = [
    { name: "Sunrise Style", key: "sunriseStyle" },
    { name: "Modern Style", key: "modernStyle" },
    { name: "Minimal Style", key: "minimalStyle" },
    { name: "Resume Style", key: "resumeStyle" },
    { name: "grid Style", key: "gridStyle" },
  ];

  // Event Handler to Change Style
  const changeStyle = (key) => {
    setStyle(styles[key]);
  };

  return (
    <div style={{ textAlign: "center" , display:"flex", flexDirection:"row",flexGrow:"1",width:"100vw"}}>
      <section style={{height:"100vh",width:"30vw"}}>
        <h1>Select a Resume Style</h1>
        <ul> 
        {styleList.map((item) => (
          <li
            key={item.key}
            onClick={() => changeStyle(item.key)}
            style={{
              listStyle:"none",
              cursor: "pointer",
              padding: "10px",
              backgroundColor: "#f0f0f0",
              margin: "5px 0",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      </section>
      <section style={{ flexGrow: "1" ,marginLeft:"30px"}}>
        <Resume style={style} userData={userData} />
      </section>
    </div>
  );
};

export default HomePage;

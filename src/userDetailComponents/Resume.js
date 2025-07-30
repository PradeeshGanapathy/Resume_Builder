import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Resume = ({ userData, style }) => {
  const componentRef = useRef();

  const handleDownload = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Resume.pdf");
  };

  const {
    personalInfo = {},
    educationalInfo = {},
    projectInfo = {},
    skills = {},
    hobbiesLanguage = {},
  } = userData || {};

  return (
    <div>
      <div ref={componentRef} style={style.resumeContainer}>
        <h1 style={style.heading}>{personalInfo.fullname || "Your Name"}</h1>
        <p>{personalInfo.professionalTitle || "Professional Title"}</p>

        <section style={style.section}>
          <h2 style={style.sectionTitle}>Contact Information</h2>
          <p>Phone: {personalInfo.contactInfo?.phoneNumber || "N/A"}</p>
          <p>Email: {personalInfo.contactInfo?.email || "N/A"}</p>
          <p>LinkedIn: {personalInfo.contactInfo?.linkedIn || "N/A"}</p>
          <p>GitHub: {personalInfo.contactInfo?.github || "N/A"}</p>
        </section>

        <section style={style.section}>
          <h2 style={style.sectionTitle}>Education</h2>
          <p>
            <strong>Degree:</strong> {educationalInfo.degree || "N/A"}
          </p>
          <p>
            <strong>Institution:</strong> {educationalInfo.institutionName || "N/A"}
          </p>
        </section>

        <section style={style.section}>
          <h2 style={style.sectionTitle}>Project</h2>
          <p>
            <strong>Title:</strong> {projectInfo.projectTitle || "N/A"}
          </p>
        </section>

        <section style={style.section}>
          <h2 style={style.sectionTitle}>Skills</h2>
          <p>
            <strong>Technical:</strong> {skills.technicalSkill?.join(", ") || "N/A"}
          </p>
        </section>

        <section style={style.section}>
          <h2 style={style.sectionTitle}>Hobbies & Languages</h2>
          <p>
            <strong>Hobbies:</strong> {hobbiesLanguage.personalIntrest?.join(", ") || "N/A"}
          </p>
        </section>
      </div>
      <button onClick={handleDownload} style={style.downloadButton}>
        Download
      </button>
    </div>
  );
};

export default Resume;

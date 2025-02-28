import React, { useState } from "react";

export default function Accordion() {
  const sections = [
    {
      title: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      title: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [index]: !prevOpenSections[index],
    }));
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index}>
          <div
            onClick={() => toggleSection(index)}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            {section.title}{" "}
            <span
              aria-hidden={true}
              className={`accordion-icon ${openSections[index] ? "open" : ""}`}
              style={{
                transform: openSections[index]
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            ></span>
          </div>
          <div
            style={{
              display: openSections[index] ? "block" : "none",
              padding: "10px",
            }}
          >
            {section.content}
          </div>
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";

export default function Tabs() {
  const [tab, setTab] = useState("HTML");

  const buttonStyle = (tabName) => ({
    backgroundColor: tab === tabName ? "lightblue" : "white", // Change 'lightblue' to your desired color
    padding: "8px 16px",
    border: "1px solid #ccc",
    cursor: "pointer",
  });

  return (
    <div>
      <div>
        <button style={buttonStyle("HTML")} onClick={() => setTab("HTML")}>
          HTML
        </button>
        <button style={buttonStyle("CSS")} onClick={() => setTab("CSS")}>
          CSS
        </button>
        <button
          style={buttonStyle("Javascript")}
          onClick={() => setTab("Javascript")}
        >
          JavaScript
        </button>
      </div>
      <div>
        {tab == "HTML" ? (
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        ) : tab == "CSS" ? (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        ) : (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
}

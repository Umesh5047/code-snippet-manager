import React from "react";

const SnippetCard = ({ snippet }) => (
  <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
    <h3>{snippet.title}</h3>
    <pre style={{ background: "#f4f4f4", padding: "1rem" }}>{snippet.code}</pre>
    <p><strong>Language:</strong> {snippet.language}</p>
  </div>
);

export default SnippetCard;
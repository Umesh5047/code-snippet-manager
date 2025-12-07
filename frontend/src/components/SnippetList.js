import React, { useEffect, useState } from "react";
import { getSnippets } from "../api";

function SnippetList() {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSnippets()
      .then(data => setSnippets(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading snippets...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Public Snippets</h2>
      <ul>
        {snippets.map(s => (
          <li key={s._id}>
            <strong>{s.title}</strong> ({s.language})<br />
            <pre style={{ background: "#f4f4f4", padding: "10px" }}>
              {s.content}
            </pre>
            <small>By {s.owner?.username}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SnippetList;
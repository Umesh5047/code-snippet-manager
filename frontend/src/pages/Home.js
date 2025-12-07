import React, { useEffect, useState } from "react";
import { getSnippets } from "../api";
import SnippetCard from "../components/SnippetCard";

const Home = () => {
  const [snippets, setSnippets] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getSnippets()
      .then(setSnippets)
      .catch(err => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>📚 Code Snippet Manager</h1>
      <h2>🌍 Public Snippets</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {snippets.length === 0 ? (
        <p>No snippets found.</p>
      ) : (
        snippets.map(snippet => (
          <SnippetCard key={snippet._id} snippet={snippet} />
        ))
      )}
    </div>
  );
};

export default Home;
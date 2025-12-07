import React, { useState } from "react";
import { createSnippet } from "../api";

function SnippetForm() {
  const [form, setForm] = useState({
    title: "",
    language: "javascript",
    content: "",
    tags: "",
    visibility: "private"
  });
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token"); // JWT stored after login

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const snippet = await createSnippet(
        { ...form, tags: form.tags.split(",") },
        token
      );
      setMessage(`Snippet created: ${snippet.title}`);
      setForm({ title: "", language: "javascript", content: "", tags: "", visibility: "private" });
    } catch (err) {
      setMessage(`Error: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <div>
      <h2>Create Snippet</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px", maxWidth: 400 }}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <select name="language" value={form.language} onChange={handleChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
        <textarea name="content" placeholder="Code content" value={form.content} onChange={handleChange} required />
        <input name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange} />
        <select name="visibility" value={form.visibility} onChange={handleChange}>
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
        <button type="submit">Save Snippet</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SnippetForm;
import React, { useState } from "react";
import { createSnippet } from "../api";

const CreateSnippet = () => {
  const [form, setForm] = useState({ title: "", code: "", language: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSnippet(form);
      setMessage("✅ Snippet created successfully!");
      setForm({ title: "", code: "", language: "" });
    } catch (err) {
      setMessage("❌ Failed to create snippet: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Create Snippet</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required /><br />
        <textarea name="code" placeholder="Code" value={form.code} onChange={handleChange} required rows={6} /><br />
        <input name="language" placeholder="Language (e.g., JavaScript)" value={form.language} onChange={handleChange} required /><br />
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateSnippet;
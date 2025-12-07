import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnippetList from "./components/SnippetList";
import SnippetForm from "./components/SnippetForm";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <h1>Code Snippet Manager</h1>
      <Routes>
        <Route path="/" element={<SnippetList />} />
        <Route path="/new" element={<SnippetForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
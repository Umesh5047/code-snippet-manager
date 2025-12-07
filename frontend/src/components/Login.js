import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem("token", res.token);
      setMessage("Login successful!");
      navigate("/"); // redirect to snippet list
    } catch (err) {
      setMessage(`Error: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px", maxWidth: 400 }}>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} type="email" required />
        <input name="password" placeholder="Password" value={form.password} onChange={handleChange} type="password" required />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
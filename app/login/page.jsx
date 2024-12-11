// pages/login.js
"use client";
import { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");  // Changed to handle both name or email
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Check if the input is an email or name
      const isEmail = usernameOrEmail.includes('@');
      const loginMethod = isEmail ? signInWithEmailAndPassword : signInWithUsername; // Assuming you have a custom function for username login.

      // Login using email or name
      await loginMethod(auth, usernameOrEmail, password);
      setMessage("Login successful!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // Placeholder function to simulate login with username (implement this if needed)
  const signInWithUsername = async (auth, username, password) => {
    // This function needs to handle login with username (custom implementation)
    console.log(`Logging in with username: ${username}`);
    // Simulate a successful login for now
  };

  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <h1 className="text-secondary text-2xl font-bold">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        {/* Input for either name or email */}
        <input
          type="text"
          placeholder="Email or Username"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          className="border px-4 py-2 mt-4 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 my-4 rounded"
        />
        {/* New User link added below the password input */}
        <a href="/sign-up" className="text-primary hover:underline text-sm">
          New User?
        </a>
        <button type="submit" className="text-lg font-semibold bg-primary text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}

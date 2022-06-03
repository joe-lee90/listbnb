import React, { useState } from "react";

export default function AuthForm({ auth: { login, signup } }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [wantsLogin, setWantsLogin] = useState(false);

  function handleSignup(event) {
    event.preventDefault();
    signup(name, imageURL, username, password, passwordConfirmation);
  }

  function handleLogin(event) {
    event.preventDefault();
    login(username, password);
  }

  const signupForm = (
    <form id="signup" onSubmit={handleSignup}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="passwordConfirmation">Password Confirmation:</label>
      <input
        type="password"
        id="passwordConfirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <br />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="imageURL">Image URL:</label>
      <input
        type="text"
        id="imageURL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <br />
      <button type="submit">Sign up!</button>
    </form>
  );

  const loginForm = (
    <form id="login" onSubmit={handleLogin}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Sign in!</button>
    </form>
  );

  return (
    <div id="auth-form">
      <button onClick={() => setWantsLogin(!wantsLogin)}>
        {wantsLogin
          ? "New user? Click here to sign up."
          : "Already have an account? Click here to login."}
      </button>
      {wantsLogin ? loginForm : signupForm}
    </div>
  );
}

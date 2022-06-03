import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuthenticatedUser } from "../App";

export default function NavBar({ auth: { logout } }) {
  const user = useAuthenticatedUser();

  return (
    <div className="header">
      <Link to="/">🏠 Home</Link>
      <Link to="/add-listing">➕ New Listing</Link>
      <Link to="/user-profile">👤 Profile</Link>
      {user && <button onClick={logout}>👋 Logout!</button>}
    </div>
  );
}

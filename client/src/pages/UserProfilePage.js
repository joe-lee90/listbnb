import React, { useEffect, useState } from "react";

import { useAuthenticatedUser } from "../App";
import "./UserProfilePage.css";

// UserProfilePage displays user information and related data
export default function UserProfilePage() {
  const user = useAuthenticatedUser();

  console.log(user);

  if (user) {
    return (
      <div className="userProfilePage">
        <h2>Welcome, {user.name}!</h2>
        <img alt={`Avatar for ${user.username}`} src={user.image} />
      </div>
    );
  } else {
    return <h2>You are logged out!</h2>;
  }
}

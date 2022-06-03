import React, { useEffect, useState } from "react";

import { useAuthenticatedUser } from "../App";
import "./UserProfilePage.css";

// UserProfilePage displays user information and related data
export default function UserProfilePage() {
  const user = useAuthenticatedUser();

  console.log(user);

  return (
    <div className="userProfilePage">
      <h2>{user.username}</h2>
      <h2>asdfasdf</h2>
    </div>
  );
}

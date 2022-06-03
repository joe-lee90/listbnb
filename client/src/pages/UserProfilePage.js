import React from 'react'
import './UserProfilePage.css';
import {useEffect, useState} from 'react'


// UserProfilePage displays user information and related data
export default function UserProfilePage() {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])

  console.log(user)

  return (
    <div className="userProfilePage">
        <h2>{user.username}</h2>
        <h2>asdfasdf</h2>
    </div>
  )
}
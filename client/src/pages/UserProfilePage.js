import React from 'react'
import './UserProfilePage.css';
import {useEffect, useState} from 'react'


// UserProfilePage displays user information and related data
export default function UserProfilePage() {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/user')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])

  return (
    <div className="userProfilePage">
        <h2>{user.name}</h2>
        <h2>asdfasdf</h2>
    </div>
  )
}
import React, {useEffect, useState} from 'react'
import'./Review.css'

function Review({review}) {
    const [users, setUsers] = useState([]) 

    useEffect(() => {
      fetch('http://localhost:4000/user')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])

    let username
    users.forEach((user) => {
        if (review.user_id === user.id)
            username = user.username
    })
    
    return (
    <div>Reviews:
        <p>{review.description} - {username}</p>
    </div>
    )
}

export default Review
import React from 'react'
import'./ListingCard.css'

export default function ListingCard({listing}) {
  return (
    <div>
      <h2>{listing.name}</h2>
      <h4>{listing.address}</h4>
      <h4>${listing.price} per night</h4>
      <img src={listing.image} alt={listing.name}/>
    </div>
  )
}
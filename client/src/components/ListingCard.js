import React from 'react'
import'./ListingCard.css'

export default function ListingCard({listing, reviews}) {

  // !   Add reviews
  return (
    <div className="listingCard">
      <h2>{listing.name} - ${listing.price} night</h2>
      <h4>{listing.address}</h4>
      <h5>{listing.description}</h5>
      <img src={listing.image} alt={listing.name}/>
    </div>
  )
}
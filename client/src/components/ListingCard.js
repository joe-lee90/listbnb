import React from 'react'
import'./ListingCard.css'
import Review from './Review'

export default function ListingCard({listing, reviews}) {

  let filterReviews = reviews.filter((review) => {
    return review.listing_id === listing.id
  })

  let listingReviews = filterReviews.map((review) => {
    return <Review key={review.id} review={review}/>
  })

  return (
    <div className="listingCard">
      <h2>{listing.name} - ${listing.price} night</h2>
      <h4>{listing.address}</h4>
      <img src={listing.image} alt={listing.name}/>
      <h5>{listing.description}</h5>
      {listingReviews}
    </div>
  )
}
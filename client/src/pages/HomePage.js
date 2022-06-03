import {useEffect, useState} from 'react'
import './HomePage.css'
import ListingCard from '../components/ListingCard'

// HomePage displays all available listings, maps out ListingCards
function HomePage() {
  const [listings, setListings] = useState([]) 

  useEffect(() => {
    fetch('http://localhost:4000/listing')
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  console.log(listings)
  let renderListings = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing}/>
  })

  return (
    <div className="HomePage">
        {renderListings}
    </div>
  )
}

export default HomePage
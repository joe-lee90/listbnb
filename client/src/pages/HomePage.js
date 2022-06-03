import {useEffect, useState} from 'react'
import './HomePage.css'
import ListingCard from '../components/ListingCard'

// HomePage displays all available listings, maps out ListingCards
function HomePage() {
  const [listings, setListings] = useState([]) 

  useEffect(() => {
    fetch('/listings')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  let renderListings = listings.map((listing) => {
    return <ListingCard />
  })

  return (
    <div className="HomePage">
        {renderListings}
    </div>
  )
}

export default HomePage
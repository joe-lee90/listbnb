import { useEffect, useState } from "react";

import AuthForm from "../components/AuthForm";
import ListingCard from "../components/ListingCard";
import "./HomePage.css";

// HomePage displays all available listings, maps out ListingCards
function HomePage() {
  const [listings, setListings] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/listing")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  let renderListings = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} reviews={reviews} />;
  });

  return (
    <>
      (user === null && <AuthForm />)
      <div className="homePage">{renderListings}</div>
    </>
  );
}

export default HomePage;

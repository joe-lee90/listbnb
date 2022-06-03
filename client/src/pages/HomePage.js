import { useEffect, useState } from "react";

import { useAuthenticatedUser } from "../App";
import AuthForm from "../components/AuthForm";
import ListingCard from "../components/ListingCard";
import "./HomePage.css";

// HomePage displays all available listings, maps out ListingCards
function HomePage({ auth }) {
  const [listings, setListings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const user = useAuthenticatedUser();

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
      {user === null && <AuthForm auth={auth} />}
      <div className="homePage">{renderListings}</div>
    </>
  );
}

export default HomePage;

import React, { useEffect, useState } from "react";
import "./TripList.css";

export default function TripsList() {
  const [trips, setTrips] = useState([]);

  // fetch("http://localhost:3000/trips")
  //   .then((response) => response.json())
  //   .then((json) => setTrip(json));

  // console.log(trips);
  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((response) => response.json())
      .then((json) => setTrips(json));
  }, []);
  return (
    <div className="tirp-list">
      <h2>Trips List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

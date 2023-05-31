import React, { useState } from "react";
import "./TripList.css";
import { useFetch } from "../hooks/UseFetch";

export default function TripsList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  // fetch("http://localhost:3000/trips")
  //   .then((response) => response.json())
  //   .then((json) => setTrip(json));

  // console.log(trips);
  const trips = useFetch(url);

  return (
    <div className="tirp-list">
      <h2>Trips List</h2>
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.location}</p>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() =>
            setUrl("http://localhost:3000/trips?location=Afghanistan")
          }
        >
          Aghani Trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?location=Iran")}
        >
          Iranian Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}

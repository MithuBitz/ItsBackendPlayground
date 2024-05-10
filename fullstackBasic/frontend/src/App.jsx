import { useState } from "react";
import "./App.css";

function App() {
  //state to hold all fetch data from the api
  const [bestPlaces, setBestPlaces] = useState([]);
  return (
    <>
      <h1>Fullstack Frontend</h1>
      <h2>{bestPlaces.length} wonders of the World</h2>

      {bestPlaces.map((places, index) => (
        <div key={places.id}>
          <h3>{places.title}</h3>
          <p>{places.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;

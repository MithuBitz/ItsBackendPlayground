import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  //state to hold all fetch data from the api
  const [bestPlaces, setBestPlaces] = useState([]);

  //Use a useEffect to fecth the data from api on mount the app
  useEffect(() => {
    //Fetch the response from the api
    axios
      .get("/api/best-places")
      .then((response) => {
        setBestPlaces(response.data);
      })
      .catch((err) => console.log("Error in fetching data ", err));
  }, []);

  return (
    <>
      <h1>Fullstack Frontend</h1>
      <h2>{bestPlaces.length} wonders of the World</h2>

      {bestPlaces.map((places) => (
        <div key={places.id}>
          <h3>{places.title}</h3>
          <p>{places.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;

import React, { useRef, useState, useEffect } from "react";
import Menu from "./Menu";
import Globe from "./Globe";
import Information from "./Information"

export default function App() {
  const covidJsonData = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [chosenMarker, setChosenMarker] = useState(null);

  function handleClick(marker) {
    setChosenMarker(marker);
  }

  function handleButtonClick(continentName) {
    const newMarkers = [];
    // Use for loop for efficient runtime.
    for (let countryCode of Object.keys(covidJsonData.current)) {
      if (covidJsonData.current[countryCode].continent === continentName || continentName === "All") {
        newMarkers.push({
          id: countryCode,
          color: "yellow",
          value: 50,
          city: covidJsonData.current[countryCode].location,
          coordinates: covidJsonData.current[countryCode].latlng
        });
      }
    }
    setMarkers(newMarkers);
    setChosenMarker(null);
  }

  // Fetch covid data as a ref.
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const URL = "covidJsonData.json";
    fetch(URL, {signal: signal, headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
      .then(response => response.json())
      .catch(err => console.log(err))
      .then(data => {
        covidJsonData.current = data;
        setMarkers(Object.keys(covidJsonData.current).map(countryCode => {
          return {
            id: countryCode,
            color: "yellow",
            value: 50,
            city: covidJsonData.current[countryCode].location,
            coordinates: covidJsonData.current[countryCode].latlng
          }
        }));
      })
      .catch(err => console.log(err));
    return function cleanup() {
      abortController.abort();
    }
  }, []);

  return <div>
    <Menu handleButtonClick={handleButtonClick}/>
    <div style = {{display: "flex"}}>
      <Globe
        markers={markers}
        handleClick={handleClick}
      />
      <Information
        chosenCountryDetails={chosenMarker && covidJsonData.current[chosenMarker.id]}
      />
    </div>
  </div>;
}

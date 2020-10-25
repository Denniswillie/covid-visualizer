import React, {useState, useEffect, useRef} from "react";
import ReactGlobe from "react-globe";

export default function Globe() {
  const [markers, setMarkers] = useState([]);
  const covidJsonData = useRef(null);
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

  return <ReactGlobe
    markers={markers}
    height="90vh"
    width="50vw"
    options={{
      ambientLightColor: 'red',
      ambientLightIntensity: 1,
      enableMarkerGlow: true,
      markerRadiusScaleRange: [0.005, 0.01],
      markerType: 'dot',
      enableMarkerTooltip: true,
      markerTooltipRenderer: marker =>`${marker.city}`,
    }}
  />
}

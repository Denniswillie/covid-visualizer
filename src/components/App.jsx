import React, { useRef, useState } from "react";
import Menu from "./Menu";
import Globe from "./Globe";
import Information from "./Information"

export default function App() {
  const covidJsonData = useRef(null);
  const [chosenMarker, setChosenMarker] = useState(null);

  return <div>
    <Menu />
    <div style = {{display: "flex"}}>
      <Globe
        setCovidJsonData={setCovidJsonData}
      />
      <Information
        covidJsonData={covidJsonData.current}
      />
    </div>
  </div>;
}

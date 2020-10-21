import React from "react";
import ReactGlobe from "react-globe";

export default function Globe() {
  return <ReactGlobe
    height="90vh"
    options={{
      ambientLightColor: 'red',
      ambientLightIntensity: 1,
    }}
   />
}

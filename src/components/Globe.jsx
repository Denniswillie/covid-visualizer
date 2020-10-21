import React from "react";
import ReactGlobe from "react-globe";

export default function Globe() {
  return <ReactGlobe
    height="100vh"
    width="100vw"
    options={{
      ambientLightColor: 'red',
      ambientLightIntensity: 1,
    }}
   />
}

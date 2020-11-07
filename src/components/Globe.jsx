import React from "react";
import ReactGlobe from "react-globe";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export default function Globe(props) {
  function onClickMarker(marker) {
    props.handleClick(marker);
  }

  return <ReactGlobe
    markers={props.markers}
    height="90vh"
    width="50vw"
    onClickMarker={onClickMarker}
    options={{
      cameraDistanceRadiusScale: 8,
      ambientLightColor: 'red',
      ambientLightIntensity: 1,
      enableMarkerGlow: true,
      markerRadiusScaleRange: [0.005, 0.01],
      markerType: 'dot',
      markerTooltipRenderer: marker => `${marker.city} (Coordinates: ${marker.coordinates})`,
    }}
  />
}

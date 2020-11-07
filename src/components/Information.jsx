import React from "react";
import {VictoryChart, VictoryLine, VictoryAxis} from "victory";

export default function Information(props) {
  const headingStyle = {
    marginTop: "3em",
    color: "white",
    fontSize: "30px",
    fontFamily: "serif"
  }

  // Holds the x and y axis for the chart.
  const data = [];
  if (props.chosenCountryDetails) {
    for (let dataPerDate of props.chosenCountryDetails.data) {
      if (dataPerDate.total_cases) {
        data.push({
          x: dataPerDate.date,
          y: dataPerDate.total_cases
        });
      }
    }
  }

  return <div style={{width: "50vw", height: "90vh", backgroundColor: "#2e5880"}}>
    <center style={headingStyle}>{props.chosenCountryDetails ? props.chosenCountryDetails.location : "Total Cases per Day (Click on one of the markers to display data)"}</center>
    <center>
      {data.length > 0 && <VictoryChart
        style={{ parent: { maxWidth: "80%" }}}
        width={500}
        height={400}
      >
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc"}
        }}
        data={data}
      />
      <VictoryAxis
        style={{
          tickLabels: {fontSize: 12, padding: 5, fill: "white"},
          grid: { stroke: "transparent"},
        }}
        tickFormat={(item, index, items) => {
          if (index === 0 || index === items.length - 1) {
            return item;
          }
        }}
      />
      <VictoryAxis
        dependentAxis
        style={{
          tickLabels: {fontSize: 12, padding: 5, fill: "white"},
          grid: { stroke: "transparent", strokeWidth: 0.5 },
        }}
      />
      </VictoryChart>
    }
    </center>
  </div>
}

import React, { Component } from "react";
// import data from "../../Data/sampledata.json";
import data1 from "../../Data/Nivo.json";
import "./lineGraph.scss";
// import axios from "axios";
import { ResponsiveLine } from "@nivo/line";
import EmpData from "../../Data/employeeData.json";

const colorarray = [
  "hsl(99, 70%, 50%)",
  "hsl(336, 70%, 50%)",
  "hsl(320, 70%, 50%)",
  "hsl(89, 70%, 50%)",
  "hsl(175, 70%, 50%)",
  "hsl(227, 70%, 50%)",
  "hsl(127, 70%, 50%)",
  "hsl(4, 70%, 50%)",
  "hsl(342, 70%, 50%)",
];

const data = EmpData.map((obj) => {
  return {
    id: obj.name,
    color: colorarray[Math.floor(Math.random() * colorarray.length)],
    data: [
      {
        x: "2/28/20-3/6/20",
        y: obj.wk1,
      },
      {
        x: "3/7/20-3/13/20",
        y: obj.wk2,
      },
      {
        x: "3/14/20-3/20/20",
        y: obj.wk3,
      },
      {
        x: "3/21/20-3/27/20",
        y: obj.wk4,
      },
      {
        x: "3/28/20-4/3/20",
        y: obj.wk5,
      },
    ],
  };
});

class LineGraph extends Component {
  render() {
    return (
      <section className="box">
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          yFormat=" >-.2f"
          // curve="natural"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Weeks",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Hours",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          lineWidth={1}
          pointSize={1}
          pointColor={{ theme: "background" }}
          pointBorderWidth={8}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: -20,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 11,
              itemOpacity: 0.75,
              symbolSize: 10,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </section>
    );
  }
}

export default LineGraph;

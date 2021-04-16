import React, { Component } from "react";
// import data from "../../Data/sampledata.json";
import data from "../../Data/tree.json";
import "./treeMap.scss";
// import axios from "axios";
import { ResponsiveTreeMap } from "@nivo/treemap";

class TreeMap extends Component {
  render() {
    return (
      <section className="tree">
        <ResponsiveTreeMap
          data={data}
          identity="name"
          value="loc"
          valueFormat=".02s"
          leavesOnly={true}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          labelSkipSize={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
          orientLabel={false}
          parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          colors={{ scheme: "red_yellow_green" }}
          borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
        />
      </section>
    );
  }
}

export default TreeMap;

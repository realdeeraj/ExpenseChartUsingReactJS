import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valuesonly = props.datapoints.map((obj) => obj.value);
  const maxValue = Math.max(...valuesonly);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxvalue={maxValue}
          label={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;

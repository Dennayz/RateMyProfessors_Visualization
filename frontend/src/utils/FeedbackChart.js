import React from "react";
import { Doughnut } from "react-chartjs-2";
import { backgroundColor, borderColor } from "./ChartColors";
const FeedbackChart = ({ labels, data }) => {
  return (
    <>
      <Doughnut
        data={{
          labels: labels,
          responsiveness: true,
          datasets: [
            {
              data: data,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            },
          ],
        }}
        height={350}
        width={350}
        options={{
          maintainAspectRatio: false,
          legend: {
            align: "start",
          },
        }}
      />
    </>
  );
};

export default FeedbackChart;

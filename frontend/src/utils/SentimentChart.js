import React from "react";
import { Pie } from "react-chartjs-2";
import { sentimentAnalysisColor } from "./ChartColors";

const SentimentChart = ({ labels, data }) => {
  const backgroundColor = labels.map((color) => {
    return sentimentAnalysisColor[color][0];
  });
  const borderColor = labels.map((color) => {
    return sentimentAnalysisColor[color][1];
  });
  return (
    <>
      <Pie
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

export default SentimentChart;

import React from "react";
import { Pie } from "react-chartjs-2";

const SentimentChart = ({ labels, data }) => {
  return (
    <>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
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

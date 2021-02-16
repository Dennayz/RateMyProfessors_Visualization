import React from "react";
import { Bar } from "react-chartjs-2";

const CourseChart = ({ labels, data }) => {
  return (
    <>
      <Bar
        data={{
          labels: labels,
          responsiveness: true,
          datasets: [
            {
              data: data,
              backgroundColor: "rgb(92,170,199, 0.7)",
              borderColor: "rgb(92,170,199, 1.0)",
              borderWidth: 1,
            },
          ],
        }}
        height={350}
        width={350}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
        }}
      />
    </>
  );
};

export default CourseChart;

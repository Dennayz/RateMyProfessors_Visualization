import React from "react";
import { Bar } from "react-chartjs-2";

const CourseChart = ({ labels, data }) => {
  return (
    <>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: "rgb(0,206,209, 0.7)",
              borderColor: "rgb(0,206,209, 1.0)",
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

import React from "react";
import "../styles/Charts.css";
import { storage } from "../../models/storage";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import SentimentAnalysis from "../../utils/SentimentAnalysis";
import FreqCount from "../../utils/FreqCount";

const Charts = () => {
  var sentimentFreqArray = [];
  var coursesFreqArray = [];
  var myResponse = storage("responseData");
  if (myResponse.reviews.length === 0) {
    return;
  }
  var sentimentList = SentimentAnalysis(myResponse.reviews);
  if (sentimentList.length === 0) {
    return;
  }
  sentimentList.forEach((sentiment) => {
    sentimentFreqArray.push(sentiment.sentiment);
  });

  myResponse.reviews.forEach((course) => {
    coursesFreqArray.push(course.course);
  });

  console.log(sentimentFreqArray);
  console.log(coursesFreqArray);
  var sentimentFrequency = FreqCount(sentimentFreqArray);
  var coursesFrequency = FreqCount(coursesFreqArray);
  var feedbackFrequency = FreqCount(myResponse.feedback);
  console.log(sentimentList);
  console.log(sentimentFrequency);
  return (
    <div className="charts-container">
      <div className="charts-wrapper">
        <div className="chart-item">
          <Pie
            data={{
              labels: Object.keys(sentimentFrequency),
              datasets: [
                {
                  data: Object.values(sentimentFrequency),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.7)",
                    "rgba(54, 162, 235, 0.7)",
                    "rgba(255, 206, 86, 0.7)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
                // {
                //   label: 'Quantity',
                //   data: [47, 52, 67, 58, 9, 50],
                //   backgroundColor: 'orange',
                //   borderColor: 'red',
                // },
              ],
            }}
            height={500}
            width={500}
            options={{
              maintainAspectRatio: true,
              // scales: {
              //   yAxes: [
              //     {
              //       ticks: {
              //         beginAtZero: true,
              //       },
              //     },
              //   ],
              // },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
          />
        </div>
        <div className="chart-item">
          <Bar
            data={{
              labels: Object.keys(coursesFrequency),
              datasets: [
                {
                  label: "# of votes",
                  data: Object.values(coursesFrequency),
                  backgroundColor: "rgba(75, 192, 192, 0.7)",
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                },
                // {
                //   label: "Quantity",
                //   data: Object.keys(coursesFrequency),
                //   backgroundColor: "orange",
                //   borderColor: "red",
                // },
              ],
            }}
            height={300}
            width={500}
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
                labels: {
                  fontSize: 25,
                },
              },
            }}
          />
        </div>
        <div className="chart-item">
          <Doughnut
            data={{
              labels: Object.keys(feedbackFrequency),
              datasets: [
                {
                  label: "# of votes",
                  data: Object.values(feedbackFrequency),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
                // {
                //   label: 'Quantity',
                //   data: [47, 52, 67, 58, 9, 50],
                //   backgroundColor: 'orange',
                //   borderColor: 'red',
                // },
              ],
            }}
            height={300}
            width={500}
            options={{
              maintainAspectRatio: true,
              // scales: {
              //   yAxes: [
              //     {
              //       ticks: {
              //         beginAtZero: true,
              //       },
              //     },
              //   ],
              // },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;

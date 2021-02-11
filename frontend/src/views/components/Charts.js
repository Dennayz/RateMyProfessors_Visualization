import React from "react";
import "../styles/Charts.css";
import { storage } from "../../models/storage";
import { defaults } from "react-chartjs-2";
import SentimentAnalysis from "../../utils/SentimentAnalysis";
import FreqCount from "../../utils/FreqCount";
import SentimentChart from "../../utils/SentimentChart";
import CoursesChart from "../../utils/CoursesChart";
import FeedbackChart from "../../utils/FeedbackChart";

defaults.global.legend.position = "right";

const Charts = () => {
  var sentimentChart, coursesChart, feedbackChart;
  sentimentChart = coursesChart = feedbackChart = "Nothing to Show";
  var sentimentFreqArray = [];
  var coursesFreqArray = [];
  var myResponse = storage("responseData");
  if (myResponse.reviews.length !== 0) {
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

    var sentimentFrequency = FreqCount(sentimentFreqArray);
    var coursesFrequency = FreqCount(coursesFreqArray);
    var feedbackFrequency = FreqCount(myResponse.feedback);
    if (Object.keys(feedbackFrequency).length !== 0) {
      feedbackChart = (
        <FeedbackChart
          labels={Object.keys(feedbackFrequency)}
          data={Object.values(feedbackFrequency)}
        />
      );
    }
    sentimentChart = (
      <SentimentChart
        labels={Object.keys(sentimentFrequency)}
        data={Object.values(sentimentFrequency)}
      />
    );

    coursesChart = (
      <CoursesChart
        labels={Object.keys(coursesFrequency)}
        data={Object.values(coursesFrequency)}
      />
    );
  }
  return (
    <div className="charts-container">
      <div className="charts-wrapper">
        <div className="chart-item">
          <span className="chart-header">Sentiment Analysis Comments</span>
          <div className="chart-div">{sentimentChart}</div>
        </div>
        <div className="chart-item">
          <span className="chart-header">Top Courses Taught</span>
          <div className="chart-div">{coursesChart}</div>
        </div>
        <div className="chart-item">
          <span className="chart-header">Top Feedback</span>
          <div className="chart-div">{feedbackChart}</div>
        </div>
      </div>
    </div>
  );
};

export default Charts;

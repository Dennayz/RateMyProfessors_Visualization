var Sentiment = require("sentiment");
var sentiment = new Sentiment();

const Sentiments = {
  POSITIVE: "positive",
  NEUTRAL: "neutral",
  NEGATIVE: "negative",
};

const SentimentAnalysis = (reviewsList) => {
  var sentimentList = [];
  if (reviewsList.length === 0) {
    return;
  }
  reviewsList.forEach((review) => {
    var result = sentiment.analyze(review.comment);
    if (result.score > 0) {
      sentimentList.push({
        comment: review.comment,
        sentiment: Sentiments.POSITIVE,
      });
    } else if (result.score === 0) {
      sentimentList.push({
        comment: review.comment,
        sentiment: Sentiments.NEUTRAL,
      });
    } else {
      sentimentList.push({
        comment: review.comment,
        sentiment: Sentiments.NEGATIVE,
      });
    }
  });
  return sentimentList;
};

export default SentimentAnalysis;

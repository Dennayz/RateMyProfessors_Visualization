var Sentiment = require("sentiment");
var sentiment = new Sentiment();

const Sentiments = {
  POSITIVE: "positive",
  NEUTRAL: "neutral",
  NEGATIVE: "negative",
};

const SentimentAnalysis = (reviewsList) => {
  var sentimentMap = { positive: [], negative: [], neutral: [] };

  var sentimentList = [];

  reviewsList.forEach((review) => {
    var result = sentiment.analyze(review.comment);
    if (result.score > 0) {
      sentimentList.push({
        comment: review.comment,
        sentiment: Sentiments.POSITIVE,
      });
      sentimentMap["positive"].push(review);
    } else if (result.score === 0) {
      sentimentList.push({
        comment: review.comment,
        sentiment: Sentiments.NEUTRAL,
      });
      sentimentMap["neutral"].push(review);
    } else {
      sentimentList.push({
        comment: review.comment,
        sentiment: Sentiments.NEGATIVE,
      });
      sentimentMap["negative"].push(review);
    }
  });
  sessionStorage.setItem("sentimentMap", JSON.stringify(sentimentMap));
  return sentimentList;
};

export default SentimentAnalysis;

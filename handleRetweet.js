import renderTweet from './renderTweet.js';

// handle retweet
const handleRetweet = (uuid) => {
  const tweets = JSON.parse(localStorage.getItem('tweets'));
  const tweet = tweets.find(tweet => tweet.uuid === uuid);
  tweet.isRetweeted = !tweet.isRetweeted;
  tweet.retweets = tweet.isRetweeted ? tweet.retweets + 1 : tweet.retweets - 1;
  localStorage.setItem('tweets', JSON.stringify(tweets));
  renderTweet();
};

export default handleRetweet;
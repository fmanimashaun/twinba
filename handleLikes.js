import renderTweet from './renderTweet.js'

const handleLike = (uuid) => {
  const tweets = JSON.parse(localStorage.getItem('tweets'));
  const tweet = tweets.find(tweet => tweet.uuid === uuid);
  tweet.isLiked = !tweet.isLiked;
  tweet.likes = tweet.isLiked ? tweet.likes + 1 : tweet.likes - 1;
  localStorage.setItem('tweets', JSON.stringify(tweets));
  renderTweet();
};

export default handleLike;
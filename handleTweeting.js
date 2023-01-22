import tweetsData from './data.js';
import renderTweet from './renderTweet.js';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const handleTweeting = () => {
  const tweets = JSON.parse(localStorage.getItem('tweets'));
  const tweetText = document.querySelector('#tweet-input').value;

  if (tweetText === '') {
    return;
  } else {
    const newTweet = {
      handle: `@scrimba`,
      profilePic: `images/scrimbalogo.png`,
      likes: 0,
      retweets: 0,
      tweetText,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: uuidv4(),
    };
    tweets.unshift(newTweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
    document.querySelector('#tweet-input').value = '';
    renderTweet();
  }
};

export default handleTweeting;
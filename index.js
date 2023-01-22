import renderTweet from './renderTweet.js';
import handleLike from './handleLikes.js';
import handleRetweet from './handleRetweet.js';
import handleReply from './handleReply.js';
import handleTweeting from './handleTweeting.js';

// render tweets on page load
renderTweet();

// add event listener to page
document.addEventListener('click', (e) => {
    if (e.target.dataset.like) {
        handleLike(e.target.dataset.like);
    } else if (e.target.dataset.retweet) {
        handleRetweet(e.target.dataset.retweet);
    } else if (e.target.dataset.reply) {
        handleReply(e.target.dataset.reply);
    } else if (e.target.id === 'tweet-btn') {
        handleTweeting();
    }
});

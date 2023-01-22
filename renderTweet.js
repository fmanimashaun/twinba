import tweetsData from './data.js';


 const renderTweet = () => {
  const feed = document.querySelector('.feed');

  if (!localStorage.getItem('tweets')) { // if there is no tweets in local storage

    // set tweets to tweetsData
    const tweets = tweetsData;

    // set tweets to local storage
    localStorage.setItem('tweets', JSON.stringify(tweetsData));

    // render tweets
    let likedTweet = '';
    let retweetedTweet = '';
    let replyHtml = '';

    const feedHtml = tweets.map(tweet => {
      if (tweet.isLiked) {
        likedTweet = 'liked';
        console.log(tweet.isLiked);
      }

      if (tweet.isRetweeted) {
        retweetedTweet = 'retweeted';
      }

      if (tweet.replies.length > 0) {
        replyHtml = tweet.replies.map(reply =>
          `
                <div class="tweet-reply">
                    <div class="tweet-inner">
                        <img src="${reply.profilePic}" class="profile-pic">
                        <div>
                            <p class="handle">${reply.handle}</p>
                            <p class="tweet-text">${reply.tweetText}</p>
                        </div>
                    </div>
                </div> 
            `).join('');
      }
      return `
            <div class="tweet" id=${tweet.uuid}>
                <div class="tweet-inner">
                    <img src="${tweet.profilePic}" class="profile-pic">
                     <div>
                        <p class="handle">${tweet.handle}</p>
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                              <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                              ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                              <i class="fa-solid fa-heart ${likedTweet}" data-like="${tweet.uuid}"></i>
                              ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                              <i class="fa-solid fa-retweet ${retweetedTweet}" data-retweet="${tweet.uuid}"></i>
                              ${tweet.retweets}
                            </span>
                        </div>   
                    </div>            
                </div>
            </div>
            <div class="hidden" id="replies-${tweet.uuid}">
              ${replyHtml}
            </div> 
            `;
    });

    document.querySelector('.feed').innerHTML = feedHtml.join('');

  } else { // if there is tweets in local storage
    // get tweets from local storage
    const tweets = JSON.parse(localStorage.getItem('tweets'));

    // render tweets
    let likedTweet = '';
    let retweetedTweet = '';
    let replyHtml = '';

    const feedHtml = tweets.map(tweet => {
      if (tweet.isLiked) {
        likedTweet = 'liked';
      } else {
        likedTweet = '';
      }

      if (tweet.isRetweeted) {
        retweetedTweet = 'retweeted';
      } else {
        retweetedTweet = '';
      }

      if (tweet.replies.length > 0) {
        replyHtml = tweet.replies.map(reply =>
          `
                <div class="tweet-reply">
                    <div class="tweet-inner">
                        <img src="${reply.profilePic}" class="profile-pic">
                        <div>
                            <p class="handle">${reply.handle}</p>
                            <p class="tweet-text">${reply.tweetText}</p>
                        </div>
                    </div>
                </div> 
            `).join('');
      }

      return `
            <div class="tweet" id=${tweet.uuid}>
                <div class="tweet-inner">
                    <img src="${tweet.profilePic}" class="profile-pic">
                     <div>
                        <p class="handle">${tweet.handle}</p>
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                              <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                              ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                              <i class="fa-solid fa-heart ${likedTweet}" data-like="${tweet.uuid}"></i>
                              ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                              <i class="fa-solid fa-retweet ${retweetedTweet}" data-retweet="${tweet.uuid}"></i>
                              ${tweet.retweets}
                            </span>
                        </div>   
                    </div>            
                </div>
            </div>
            <div class="hidden" id="replies-${tweet.uuid}">
              ${replyHtml}
            </div> 
            `;
    });

    document.querySelector('.feed').innerHTML = feedHtml.join('');
  }
};

export default renderTweet;
import React from 'react';
import Message from '../Message';
import './messageList.css';

function MessageList ({messages, onReplyTweet, onRetweet, onFavorite}) {
  return (
    <div className='list'>
        {messages.map(msg => {
          return(
            <Message 
              key={msg.id}
              text={msg.text}
              picture={msg.picture}
              displayName={msg.displayName}
              username={msg.username}
              date={msg.date}
              onReplyTweet={() => onReplyTweet(msg.id, msg.username)}
              numRetweets={msg.retweets}
              numFavorites={msg.favorites}
              onRetweet={() => onRetweet(msg.id)}
              onFavorite={() => onFavorite(msg.id)}
            />
          )
        }).reverse()}
    </div>
  );
}

export default MessageList;

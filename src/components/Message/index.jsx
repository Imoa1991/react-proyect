import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './message.css';

class Message extends Component{
  constructor(props){
    super(props)

    this.state = {
      pressRetweet: false,
      pressFavorite: false
    }

    this.onPressRetweet=this.onPressRetweet.bind(this);
    this.onPressFavorite=this.onPressFavorite.bind(this);

  }

  onPressRetweet() {
    this.props.onRetweet()
    this.setState({
      pressRetweet: true
    })
  }

  onPressFavorite() {
    this.props.onFavorite()
    this.setState({
      pressFavorite: true
    })
  }

  render() {
    const { picture, displayName, username, date, text, onReplyTweet, numRetweets, numFavorites } = this.props;
    let dateFormat = moment(date).fromNow()
    let userLink = `/user/${username}`
    
    return (
      <div className='messageContent'>
        <div className='user'>
          <Link to={userLink}>
            <figure className='contentImage'>
              <img className='avatar' src={picture} alt="avatar"/>
            </figure>
          </Link>
          <span className='displayName'>{displayName}</span>
          <span className='username'>{username}</span>
          <span className='date'>{dateFormat}</span>
        </div>
        <h3 className='text'>{text}</h3>
        <div className='buttons'>
          <div 
            className='icon'
            onClick={onReplyTweet}
          >
            <span className='fa fa-reply'></span>
          </div>
          <div 
            className={(this.state.pressRetweet) ? 'iconGreen' : 'icon'}
            onClick={this.onPressRetweet}
          >
            <span className='fa fa-retweet'></span>
            <span className='num'>{numRetweets}</span>
          </div>
          <div 
            className={(this.state.pressFavorite) ? 'iconYellow' : 'icon'}
            onClick={this.onPressFavorite}
          >
            <span className='fa fa-star'></span>
            <span className='num'>{numFavorites}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
import React, { Component, Fragment } from 'react';
import uuid from 'uuid';
import MessageList from '../MessageList';
import InputText from '../InputText';
import ProfileBar from '../ProfileBar';

import Otrayo from '../../static/img/otrayo.jpg';
import Almendrita from '../../static/img/almendrita.jpg';

class Main extends Component {
  constructor (props){
    super(props)

    this.state = {
      user: Object.assign({}, this.props.user, { retweets: [] }, { favorites: []} ),
      openText: false,
      userNameToReply: '',
      messages: [
        {
          id: uuid.v4(),
          text:'Mensaje del tuit',
          picture: Otrayo,
          displayName: 'Imoa',
          username: 'Imoa91',
          date: Date.now(),
          retweets: 0,
          favorites: 0
        },
        {
          id: uuid.v4(),
          text:'Otro mensaje',
          picture: Almendrita,
          displayName: 'Almendrita',
          username: 'AlmendritaCat',
          date: Date.now() - 180000,
          retweets: 0,
          favorites: 0
        }
      ]
    }

    this.handleOpenText=this.handleOpenText.bind(this);
    this.handleCloseText=this.handleCloseText.bind(this);
    this.handleSendText=this.handleSendText.bind(this);
    this.handleReplyTweet=this.handleReplyTweet.bind(this);
    this.handleRetweet=this.handleRetweet.bind(this);
    this.handleFavorite=this.handleFavorite.bind(this);
  }

  handleOpenText(event) {
    event.preventDefault()
    this.setState({
      openText: true
    })
  }

  renderOpenText() {
    if (this.state.openText) {
      return (
        <InputText 
          onSendText={this.handleSendText}
          onCloseText={this.handleCloseText}
          userNameToReply={this.state.userNameToReply}
        />
      )
    }
  }

  handleSendText(event) {
    event.preventDefault()
    let newMessage = {
      id: uuid.v4(),
      username: this.props.user.email.split('@')[0],
      displayName: this.props.user.displayName,
      picture: this.props.user.photoURL,
      date: Date.now(),
      text: event.target.text.value,
      retweets: 0,
      favorites: 0
    }
    this.setState({
      messages: this.state.messages.concat([newMessage]),
      openText: false,
      userNameToReply: ''
    })
  }

  handleCloseText(event) {
    event.preventDefault()
    this.setState({
      openText: false,
      userNameToReply: ''
    })
  }

  handleReplyTweet(msgId, userNameToReply, username) {
    this.setState({
      openText: true,
      userNameToReply
    })
  }

  handleRetweet(msgId) {
    let alreadyRetweeted= this.state.user.retweets.filter(rt => rt === msgId)
    if (alreadyRetweeted.length === 0) {
      let messages = this.state.messages.map(msg => {
        if(msg.id === msgId){
          msg.retweets++
        }
        return msg
      })
      let user = Object.assign({}, this.state.user)
      user.retweets.push(msgId)

      this.setState({
        messages,
        user
      })
    }
  }

  handleFavorite(msgId) {
    let alreadyFavorited= this.state.user.favorites.filter(fav => fav === msgId)
    
    if (alreadyFavorited.length === 0) {
      let messages = this.state.messages.map(msg => {
        if(msg.id === msgId){
          msg.favorites++
        }
        return msg
      })
      let user = Object.assign({}, this.state.user)
      user.favorites.push(msgId)

      this.setState({
        messages,
        user
      })
    }
  }

  render() {
    return (
      <Fragment>
        <ProfileBar 
          picture={this.props.user.photoURL}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList 
          messages={this.state.messages}
          onReplyTweet={this.handleReplyTweet}
          onRetweet={this.handleRetweet}
          onFavorite={this.handleFavorite}
        />
      </Fragment>
    );
  }
}

export default Main;

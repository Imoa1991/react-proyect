import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'normalize-css';
import Header from '../Header';
import Main from '../Main';
import Login from '../Login';
import Profile from '../Profile';
import './app.css'

import Irene from '../../static/img/yo.jpg';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        photoURL: Irene,
        email: 'ordonez.im@gamil.com',
        displayName: 'Irene Ordóñez',
        location: 'Madrid, España',
      }
    }
    this.handleOnAuth= this.handleOnAuth.bind(this)
  }

  handleOnAuth(){
    console.log('Auth');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={ () => {
            if(this.state.user) {
              return (
                <Main user={this.state.user} />
              )
            } else {
              return (
                <Login onAuth={this.handleOnAuth}/>
              )
            }
          }} />
          <Route exact path='/profile' render={() => (
            <Profile
              picture={this.state.user.photoURL}
              displayName={this.state.user.displayName}
              username={this.state.user.email.split('@')[0]}
              emailAddress={this.state.user.email}
              location={this.state.user.location}
            />
          )} />
          <Route path='/user/:username' render={({ match }) => {
            return (
              <Profile 
                displayName={match.params.username}
                username={match.params.username}
                nada='segundo profile'
              />
            ) 
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React,{ Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username : 'supermax'
  }

  usernameChnagedHandler = (event) => {
    this.setState ({
      username : event.target.value
    })
  }

  render() {
    return (
      <div className ="App">
        <ol>
            <li>hello world</li>
            <li>hello world two</li>
        </ol>
        <UserInput currenName={this.state.username} changed={this.usernameChnagedHandler} />
        <UserOutput UserName={this.state.username}/>
        <UserOutput UserName="mini" />
        <UserOutput UserName="roy"/>
      </div>
      )
    }
  }

  export default App;

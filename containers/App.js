import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router'

import MainLayout from '../components/MainLayout';
import DirectoryLayout from '../components/DirectoryLayout';
import Profile from '../components/Profile';
import MessagesLayout from '../components/MessagesLayout';

require("../sass/style.scss");

class App extends React.Component {

 constructor(props){
    super(props);
    this.state = {
      isUserSignedIn: false,
      currentUser: {}
    }
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route component={MainLayout} store={this.props.store}>
          <Route path="/" component={DirectoryLayout} />
          <Route path="/profile/:profileId" component={Profile} />
          <Route path="messages" component={MessagesLayout} />
        </Route>
      </Router>

    )
  }
}

export default App;

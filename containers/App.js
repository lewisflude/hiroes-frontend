import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

import MainLayout from '../components/MainLayout';
import DirectoryLayout from '../components/DirectoryLayout';
import ProfileLayout from '../components/ProfileLayout';
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
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path="/" component={DirectoryLayout} />
          <Route path="/profile/:profileId" component={ProfileLayout} />
          <Route path="messages" component={MessagesLayout} />
        </Route>
      </Router>

    )
  }
}

export default App;

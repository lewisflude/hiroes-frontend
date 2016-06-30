import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

import MainLayout from './MainLayout';
import DirectoryLayout from './DirectoryLayout';
import ProfileCardList from './ProfileCardList';
import Profile from './Profile';

require("../sass/style.scss");

class App extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path="/" component={DirectoryLayout} />
          <Route path="/profile/:profileId" component={Profile} />
        </Route>
      </Router>
    )
  }
}

export default App;

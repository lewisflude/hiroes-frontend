import React from 'react';
import { Router, Route, Link } from 'react-router'

import MainLayout from './MainLayout';
import DirectoryLayout from './DirectoryLayout';
import ProfileCardList from './ProfileCardList';

require("../sass/style.scss");

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route component={MainLayout}>
          <Route path="/" component={DirectoryLayout}>
          </Route>
        </Route>
      </Router>
    )
  }
}

export default App;

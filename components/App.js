import React from 'react';
import ProfileCardList from './ProfileCardList';

require("../sass/style.scss");

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar col-1" />
        <ProfileCardList source="https://hiroes.herokuapp.com/directory" />
      </div>
    )
  }
}

export default App;

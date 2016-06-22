import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ProfileCardList from './ProfileCardList';

require("../sass/style.scss");

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="container">

          <ProfileCardList source="https://hiroes.herokuapp.com/directory" />
        </div>
      </div>
    )
  }
}

export default App;

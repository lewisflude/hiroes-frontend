import React from 'react';
import ProfileCardList from './ProfileCardList';

require("../sass/style.scss");

class App extends React.Component {
  render() {
    return (
      <ProfileCardList source="https://hiroes.herokuapp.com/directory" />
    )
  }
}

export default App

import React from 'react';
import ProfileCard from './ProfileCard';

class App extends React.Component {
  render() {
    return (
      <ProfileCard source="https://hiroes.herokuapp.com/repo" />
    )
  }
}

export default App

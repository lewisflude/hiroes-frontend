import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SidebarNav from './SidebarNav';
import SidebarNavItem from './SidebarNavItem';
import ProfileCardList from './ProfileCardList';

require("../sass/style.scss");

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedTalent: 'Photographer'
    };
  };

  handleChange(navItem) {
    this.setState({ selectedTalent: navItem.value });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="container">

          <ProfileCardList filter={this.state.selectedTalent} source="https://hiroes.herokuapp.com/directory" />
        </div>
      </div>
    )
  }
}

export default App;

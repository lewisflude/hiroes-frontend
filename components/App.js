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

  handleChange(selectedNavItem) {
    this.setState({selectedTalent: selectedNavItem}, function () {
      

    });

  }


  render() {

    return (
      <div className="wrapper">
        <Header />
        <Sidebar 
          handleChange={this.handleChange.bind(this)}
        />
        
        <div className="container">
          <ProfileCardList filter={this.state.selectedTalent} source="https://hiroes.herokuapp.com/directory" />
        </div>
      </div>
    )
  }
}

export default App;

import React from 'react';
import SidebarNav from './SidebarNav';

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedNavItem: "Musician"
    }
  }

  handleChange(navItem){
    // this.props.handleChange(this.state.selectedNavItem);
    this.props.handleChange(navItem.value);
    this.setState({selectedNavItem: navItem.value});
  }

  render() {
    return (
      <div className="sidebar">
        <SidebarNav 
          handleChange={this.handleChange.bind(this)}
          selectedNavItem={this.state.selectedNavItem}
        />
      </div>
    )
  }
}

export default Sidebar;

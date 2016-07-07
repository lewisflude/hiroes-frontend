import React from 'react';
import SidebarNav from './SidebarNav';

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedNavItem: "All"
    }
  }


  render() {
    return (
      <div className="sidebar">
        <SidebarNav 
          selectedNavItem={this.state.selectedNavItem}
        />
      </div>
    )
  }
}

export default Sidebar;

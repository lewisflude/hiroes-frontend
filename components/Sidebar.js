import React from 'react';
import SidebarNav from './SidebarNav';

var sidebarNavItemList = [
  { 'title': 'Photographer', 'value': 'Photographer', 'class': 'photography', 'icon': 'photo_camera' },
  { 'title': 'Musician', 'value': 'Musician', 'class': 'music', 'icon': 'music_note' },
  { 'title': 'Venue', 'value': 'Venue', 'class': 'venue', 'icon': 'home' },
  { 'title': 'Food', 'value': 'Food', 'class': 'food', 'icon': 'restaurant' }
];
class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sidebarNavItemList: sidebarNavItemList,
      selectedNavItem: "Musician"
    }
  }
  handleChange(navItem) {
    this.setState({
      selectedNavItem: navItem
    })
    
  }
  render() {
    return (
      <div className="sidebar">
        <SidebarNav 
          sidebarNavItemList={this.state.sidebarNavItemList}
          handleChange={this.handleChange.bind(this)}
          selectedNavItem={this.state.selectedNavItem}
        />
        {this.state.selectedNavItem}
      </div>
    )
  }
}

export default Sidebar;

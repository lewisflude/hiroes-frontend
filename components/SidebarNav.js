
import React from 'react';
import SidebarNavItem from './SidebarNavItem';

var sidebarNavItemList = [
  { 'title': 'Photographer', 'value': 'Photographer', 'class': 'photography', 'icon': 'photo_camera' },
  { 'title': 'Musician', 'value': 'Musician', 'class': 'music', 'icon': 'music_note' },
  { 'title': 'Venue', 'value': 'Venue', 'class': 'venue', 'icon': 'home' },
  { 'title': 'Food', 'value': 'Chef', 'class': 'food', 'icon': 'restaurant' }
];

class SidebarNav extends React.Component {
  handleChange(navItem){
      this.props.handleChange(navItem);
  }
  render() {
    return (
      <div className="nav">
        {sidebarNavItemList.map((navItem, index) => (
          <SidebarNavItem
            handleChange={this.handleChange.bind(this, navItem)}
            title={navItem.title}
            value={navItem.value}
            class={navItem.class}
            icon={navItem.icon}
            key={index}
            isSelected={(this.props.selectedNavItem === navItem.value )}
          />
        ))}
      </div>
    )
  }
}

export default SidebarNav;

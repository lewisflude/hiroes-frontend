
import React from 'react';
import SidebarNavItem from './SidebarNavItem';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore'

const store = configureStore();

var sidebarNavItemList = [
  { 'title': 'Photographer', 'value': 'Photographer', 'class': 'photography', 'icon': 'photo_camera' },
  { 'title': 'Musician', 'value': 'Musician', 'class': 'music', 'icon': 'music_note' },
  { 'title': 'Venue', 'value': 'Venue', 'class': 'venue', 'icon': 'home' },
  { 'title': 'Food', 'value': 'Chef', 'class': 'food', 'icon': 'restaurant' }
];

class SidebarNav extends React.Component {

  render() {
    return (
      <div className="nav">
        <div className="nav-item">

          <i className="material-icons md-48">filter_list</i>
        </div>
        {sidebarNavItemList.map((navItem, index) => (
          <SidebarNavItem
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

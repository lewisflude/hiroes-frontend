
import React from 'react';
import SidebarNavItem from './SidebarNavItem';

class SidebarNav extends React.Component {
  handleChange(navItem){
      this.props.handleChange(navItem);
  }
  render() {
    return (
      <div className="nav">
        {this.props.sidebarNavItemList.map(function(navItem) {
          return (
            <SidebarNavItem
              handleChange={this.handleChange.bind(this, navItem)}
              title={navItem.title}
              value={navItem.value}
              class={navItem.class}
              icon={navItem.icon}
              isCurrent={(this.props.selectedNavItem === navItem.value )}
            />
          )
        }.bind(this))}
      </div>
    )
  }
}

export default SidebarNav;

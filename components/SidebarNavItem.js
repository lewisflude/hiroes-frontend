import React from 'react';
import { connect } from 'react-redux'
import { setDirectoryFilter } from '../actions/index.js'

class SidebarNavItem extends React.Component {
  handleChange(navItem){
    this.props.handleChange(navItem);
  }
  render() {
    if (this.props.isSelected) {
      var selectedClass = " selected"
    } else {
      var selectedClass = ""
    }
    return (
      <div className={"nav-item" + " nav-item--" + this.props.class + selectedClass}>
        <a className="nav-item-link" ref="filterButton" value={this.props.value} onClick={this.handleChange.bind(this)}>
          <i className="nav-item-icon material-icons md-36">{this.props.icon}</i>
          <div className="nav-item-label">{this.props.title}</div>
        </a>
      </div>
    )
  }
}

export default SidebarNavItem;

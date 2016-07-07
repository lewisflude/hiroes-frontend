import React from 'react';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore'
import { setDirectoryFilter } from '../actions'
const store = configureStore();

class SidebarNavItem extends React.Component {

  handleClick() {
    this.props.dispatch(setDirectoryFilter(this.props.value));
  }
  render() {


    if (this.props.isSelected) {
      var selectedClass = " selected"
    } else {
      var selectedClass = ""
    }
    return (
      <div className={"nav-item" + " nav-item--" + this.props.class + selectedClass}>
        <a className="nav-item-link" ref="filterButton" value={this.props.value} onClick={() => this.handleClick()}>
          <i className="nav-item-icon material-icons md-36">{this.props.icon}</i>
          <div className="nav-item-label">{this.props.title}</div>
        </a>
      </div>
    )
  }
}

export default connect()(SidebarNavItem);

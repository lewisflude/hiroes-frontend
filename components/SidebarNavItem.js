import React from 'react';

class SidebarNavItem extends React.Component {

  handleChange(e) {
    e.preventDefault();
    console.log(this.props.title);

    // this.props.handleChange();
  }
  render() {
    return (
      <div className={"nav-item" + " " + this.props.class}>
        <a className="nav-item-link" ref="filterButton" value={this.props.value} onClick={this.handleChange}>
          <i className="material-icons md-36">{this.props.icon}</i>
          <div className="nav-item-label">{this.props.title}</div>
        </a>
      </div>
    )
  }
}

export default SidebarNavItem;

import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="nav">
          <div className="nav-item photography">
            <a className="nav-item-link">
              <i className="material-icons md-36">photo_camera</i>
              <div className="nav-item-label">Photography</div>
            </a>
          </div>
          <div className="nav-item food">
            <a className="nav-item-link">
              <i className="material-icons md-36">restaurant</i>
              <div className="nav-item-label">Food</div>
            </a>
          </div>
          <div className="nav-item music">
            <a className="nav-item-link">
              <i className="material-icons md-36">music_note</i>
            </a>
            <div className="nav-item-label">Music</div>
          </div>
          <div className="nav-item venue">
            <a className="nav-item-link">
              <i className="material-icons md-36">home</i>
            </a>
            <div className="nav-item-label">Venue</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar;

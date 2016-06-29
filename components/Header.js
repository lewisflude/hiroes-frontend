import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header__login-container">
          <a>Log in</a>
          <a>Sign up</a>
        </div>
      </header>
    )
  }
}

export default Header;

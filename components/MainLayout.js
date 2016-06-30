import React from 'react';
import Header from './Header';


class MainLayout extends React.Component {



  render() {

    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MainLayout;
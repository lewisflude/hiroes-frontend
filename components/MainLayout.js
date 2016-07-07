import React from 'react';
import Header from './Header';


class MainLayout extends React.Component {



  render() {

    return (
      <div className="wrapper">
        <Header store={this.props.store} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MainLayout;
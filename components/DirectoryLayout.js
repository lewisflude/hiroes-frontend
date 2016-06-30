import React from 'react';
import Sidebar from './Sidebar';
import ProfileCardList from './ProfileCardList';


class DirectoryLayout extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedTalent: 'All'
    };
  };

  handleChange(selectedNavItem) {
    this.setState({selectedTalent: selectedNavItem}, function () {
      

    });

  }


  render() {

    return (
      <div className="page">
        <div className="col-2">
          <Sidebar 
            handleChange={this.handleChange.bind(this)}
          />
        </div>
        <ProfileCardList filter={this.state.selectedTalent} source="https://hiroes.herokuapp.com/directory" />
      </div>
    )
  }
}

export default DirectoryLayout;
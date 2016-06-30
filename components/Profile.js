import React from 'react';

class Profile extends React.Comcponent {

  findUserById(id) {

  }
  componentDidMount() {
    this.setState({
      user: findProfieById(this.props.params.profileId)
    })
  },
  render() {
    return (
      <div className="page">
        
      </div>
    )
  }
}

export default Profile;

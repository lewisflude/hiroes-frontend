import React from 'react';

class ProfileCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      detail: "",
      picture: "",
      talent: "",
      subtalent: "",
      minprice: 0,
      unit: ""
    }
  }
  componentDidMount() {
    this.serverRequest = $.getJSON(this.props.source, function (result) {
      var userProfile = result;
      this.setState({
        name: userProfile.Name,
        description: userProfile.description,
        detail: userProfile.detail,
        picture: userProfile.picture,
        talent: userProfile.talent,
        subtalent: userProfile.subtalent,
        minprice: userProfile.minprice,
        unit: userProfile.unit
      });

    }.bind(this));
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.talent}</h2>
        <p>{this.state.description}</p>
      </div>
    )
  }
}

export default ProfileCard;

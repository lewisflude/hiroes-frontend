import React from 'react';
import axios from 'axios';


class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: [],
    };
  }

  componentDidMount() {
    const profileSource = "https://hiroes.herokuapp.com/presta/" + this.props.params.profileId;
    
    this.serverRequest = axios.get(profileSource).then(
      function (response) {
        this.setState({
          profile: response.data
        });
      }.bind(this)
    )

  }

  render() {
      const profile = this.state.profile;
      return (
      <div className="page">
        <div className="row">
          <div className="col-12">
            <div className="profile__header">
              <img className="profile__picture" src={profile.picture} />
              <div className="profile__name-group">
                <h1 className="profile__name">{profile.Name}</h1>
                <h2 className="profile__area">
                  <i className="material-icons md-18">location_city</i> 
                  {profile.area}
                </h2>
                <p>{profile.bio}</p>
              </div>
              <div className="profile__talent-group">
                <span className="profile__talent">{profile.talent}</span>
                <span className="profile__subtalent">{profile.subtalent}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <p className="profile__description">{profile.description}</p>
          </div>
          <div className="col-4">
            <p className="profile__detail">{profile.detail}</p>
          </div>
        </div>

        <span>{profile.minprice}</span>
        <span>{profile.minunit}</span>
        <span>{profile.unit}</span>


      </div>
    )
  }
}

export default Profile;

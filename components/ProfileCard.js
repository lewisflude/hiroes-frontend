import React from 'react';

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="profile-card">
        <h1 className="profile-card__name">{this.props.name}</h1>
        <img className="profile-card__picture" src={this.props.picture} />
        <h2 className="profile-card__talent">{this.props.talent}</h2>
        <h3 className="profile-card__subtalent">{this.props.subtalent}</h3>
        <p className="profile-card__description">{this.props.description}</p>
        <p className="profile-card__minprice">£{this.props.minprice}</p>
        <p className="profile-card__unit">{this.props.unit}</p>
      </div>
    )
  }
}

export default ProfileCard;

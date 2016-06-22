import React from 'react';

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="profile-card">
        <div className="profile-card__header">
          <img className="profile-card__picture" src={this.props.picture} />
          <div className="profile-card__title">
            <h1 className="profile-card__name">{this.props.name}</h1>
            <h2 className="profile-card__talent">{this.props.talent}</h2>
            <h3 className="profile-card__subtalent">{this.props.subtalent}</h3>
          </div>
        </div>
        <p className="profile-card__description">{this.props.description}</p>
        <div className="profile-card__price">
          <span className="profile-card__minprice">£{this.props.minprice}</span>
          <span className="profile-card__unit"> per {this.props.unit}</span>
        </div>
      </div>
    )
  }
}

export default ProfileCard;

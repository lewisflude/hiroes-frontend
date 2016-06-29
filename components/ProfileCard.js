import React from 'react';


class ProfileCard extends React.Component {
  render() {
    var rating = Math.round(this.props.rating);
    var profileCardRating;
    if (rating === 0) {
      profileCardRating = 
      <div>
        <i className="material-icons md-18 md-inactive">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>

      </div>

    } else if (rating === 1) {
      profileCardRating = 
      <div>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
      </div>

    } else if (rating === 2) {
      profileCardRating = 
      <div>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
      </div>

    } else if (rating === 3) {
      profileCardRating = 
      <div>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>
      </div>

    } else if (rating === 4) {
      profileCardRating = 
      <div>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18 md-inactive">grade</i>

      </div>

    } else if (rating === 5) {
      profileCardRating = 
      <div>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18">grade</i>
        <i className="material-icons md-18">grade</i>
      </div>
    }
    return (
      <div className="col-5">
        <div className="profile-card">
          <div className="profile-card__header">
            <img className="profile-card__picture" src={this.props.picture} />
            <div className="profile-card__title">
              <div className="profile-card__name">{this.props.name}</div>
              <div className="profile-card__location">
                  <i className="material-icons md-18">location_city</i> 
                  {this.props.area}
              </div>
              <div className="profile-card__tags">
                <div className="profile-card__talent">{this.props.talent}</div>
                <div className="profile-card__subtalent">{this.props.subtalent}</div>
              </div>
              <div className="profile-card__price">
                <span className="profile-card__minprice">£{this.props.minprice}</span>
                <span className="profile-card__unit"> per {this.props.unit}</span>
              </div>

            </div>
              <div className="profile-card__rating">
                <div className="profile-card__rating-count">
                  {this.props.rating_count} reviews
                </div>
                <div className="profile-card__rating-stars">
                  {profileCardRating}
                </div>
                
              </div>
              
          </div>
          <div className="profile-card__body">
            <div className="profile-card__description">
              <p>{this.props.description}</p>
            </div>
           
            <div className="row">
              <div className="profile-card__actions">
                <a className="button button--default" onClick={this.alertMe}>View Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileCard;

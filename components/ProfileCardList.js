import React from 'react';
import ProfileCard from './ProfileCard';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();
const state = store.getState();

class ProfileCardList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      api:[]
    }
  }

  render() {
    return (
      <div className="profile-card-list">
      <div className="col-10">
      <div className="topbar">
      <h1 className="topbar__title">{this.props.directoryFilter}</h1>
      </div>
      </div>
      { this.props.profiles.map(function(profile, index){
        return (
        <ProfileCard 
        key={index}
        name={profile.Name}
        description={profile.description}
        detail={profile.detail}
        picture={profile.picture}
        talent={profile.talent}
        subtalent={profile.subtalent}
        minprice={profile.minprice}
        unit={profile.unit}
        rating={profile.rating}
        rating_count={profile.rating_count}
        area={profile.area}
        id={profile.id}

        />
        )
      })}
      </div>
      )
  }
}

export default ProfileCardList;
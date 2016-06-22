import React from 'react';
import ProfileCard from './ProfileCard';

class ProfileCardList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: []
    }
  }
  componentDidMount() {
    this.serverRequest = $.getJSON(this.props.source, function (result) {
      var apiData = $.map(result, function(value, index) { return [value] });
      this.setState({
        profiles: apiData
      });

    }.bind(this));
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {

    var profiles = this.state.profiles;
    return (
      <div className="col-4">
      { profiles.map(function(profile, index){
        return (
          <ProfileCard 
            name={profile.Name}
            description={profile.description}
            detail={profile.detail}
            picture={profile.picture}
            talent={profile.talent}
            subtalent={profile.subtalent}
            minprice={profile.minprice}
            unit={profile.unit}
          />
        )
      })}
      </div>
    )
  }
}

export default ProfileCardList;
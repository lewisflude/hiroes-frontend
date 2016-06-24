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
      var filter=this.props.filter;
      var apiData = $.map(result, function(value, index) { return [value] });
      var filteredData = $.grep(apiData, function(e){ return e.talent == filter; });
      this.setState({
        profiles: filteredData
      });

    }.bind(this));
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    var profiles = this.state.profiles;
    return (
      <div className="col-6 col-offset-3">
      { profiles.map(function(profile, index){
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

          />
        )
      })}
      </div>
    )
  }
}

export default ProfileCardList;
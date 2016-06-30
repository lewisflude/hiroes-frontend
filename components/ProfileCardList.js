import React from 'react';
import ProfileCard from './ProfileCard';
import axios from 'axios';

class ProfileCardList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: [],
      api:[],
      filter: ""
    }
  }

  getData() {
    this.serverRequest = 
    axios.get(this.props.source, { responseType: 'json' })
    .then(function (result) {
      var apiData = 

      $.map(result.data, function(value, index) { return [value] });
      this.setState({
        api: apiData
      });   
      this.filterData();
    }.bind(this)
    )
  }

  updateFilter() {
    this.setState({filter: this.props.filter}, function () {

      this.filterData(this.state.filter);

    });
  }

  filterData(){
    var filter = this.props.filter;

    if (filter == "All") {
      var filteredData = this.state.api;
    } else {
      var filteredData = $.grep(this.state.api, function(e){ return e.talent == filter; });
    }  
    this.setState({
      profiles: filteredData,
    });
  }


  componentDidMount() {
    this.getData();

  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  componentWillReceiveProps() {
    this.updateFilter();
    
  }
  
  render() {
    var profiles = this.state.profiles;
    return (
      <div className="profile-card-list">
      <div className="col-10">
      <div className="topbar">
      <h1 className="topbar__title">{this.props.filter}</h1>
      </div>
      </div>
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
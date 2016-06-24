import React from 'react';
import ProfileCard from './ProfileCard';

class ProfileCardList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: [],
      api:[],
      filter: "Musician"
    }
  }

  getData() {
    this.serverRequest = $.getJSON(this.props.source, function (result) {
    var apiData = $.map(result, function(value, index) { return [value] });
    this.setState({
      api: apiData
    });
    this.filterData();
    }.bind(this));
    
  }

  updateFilter() {
    this.setState({filter: this.props.filter}, function () {
      
      this.filterData(this.state.filter);
    
    });
  }

  filterData(){
    var filter=this.props.filter;
    var filteredData= $.grep(this.state.api, function(e){ return e.talent == filter; });
    
    
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
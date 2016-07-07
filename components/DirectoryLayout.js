import React from 'react';
import Sidebar from './Sidebar';
import ProfileCardList from './ProfileCardList';
import { connect } from 'react-redux';
import axios from 'axios';

class DirectoryLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      unfilteredProfiles: [],
    };
  }

  componentDidMount() {
    const directorySource = "https://hiroes.herokuapp.com/directory"
    
    this.serverRequest = axios.get(directorySource).then(
      function (response) {
        var unfilteredProfiles = $.map( response.data, function(value, index) { return [value] });
        this.setState({
          unfilteredProfiles: unfilteredProfiles
        });
      }.bind(this)
    )

  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  filteredProfiles(directoryFilter) {
      if (directoryFilter == "All") {
        return this.state.unfilteredProfiles;
      } else {
        return $.grep(this.state.unfilteredProfiles, function(e){ return e.talent == directoryFilter; });
      }  
  }

  
  render() {
    const { directoryFilter } = this.props
    return (

      <div className="page">
        <div className="col-2">
          <Sidebar />
        </div>
        <ProfileCardList directoryFilter={directoryFilter} profiles={this.filteredProfiles(directoryFilter)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    directoryFilter: state.directoryFilter
  }
}

export default connect(mapStateToProps)(DirectoryLayout);
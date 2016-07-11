import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ConversationList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeThreads: []
    }
  }

  componentDidMount() {
    const activeThreadsSource = "https://hiroes.herokuapp.com/activeThreads/" + this.props.facebookResponse.userID;
    this.serverRequest = axios.get(activeThreadsSource).then(
      function (response) {
        this.setState({
          activeThreads: response.data
        });

      }.bind(this)
    )
  }


  render() {
    const activeThreads = this.state.activeThreads
    return (
      <div className="sidebar">

        {Object.keys(activeThreads).map(function(id, index){
          return (
            <li className="conversation-list__item" key={index}>{id}</li>

          )
        })}
      </div>
    )
  }
}

export default ConversationList;

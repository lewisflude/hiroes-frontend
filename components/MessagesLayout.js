import React from 'react';

class MessagesLayout extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedTalent: 'All'
    };
  };



  render() {

    return (
      <div className="page">
        <h1>Messages</h1>
      </div>
    )
  }
}

export default MessagesLayout;
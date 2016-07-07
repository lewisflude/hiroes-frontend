import React from 'react';
import { connect } from 'react-redux';

var ReactFireMixin = require('reactfire');
var config = {
  apiKey: "5BTIOW6HSILLT88VLoS53BMkgIa69X1czI5xBIiO",
  authDomain: "hiroes.firebaseapp.com",
  databaseURL: "https://hiroes.firebaseio.com"
};
var showdown  = require('showdown'),
    converter = new showdown.Converter();
var firebase = require('firebase');
var x=4;
var app=firebase.initializeApp(config);

var Comment = React.createClass({
  render: function() {
  var date = new Date(this.props.timestamp*1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    //console.log(Date.now())
    // <h2 className='commentAuthor'>{this.props.sender}</h2>
    //<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
    //var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className='message'>
        <h4 className='message__author'>{this.props.author}</h4>
        <h2 className='message__text'>{this.props.text}</h2>
        <div className='message__timestamp'>{String(date)}</div>   
      </div>
    );
  }
});

var CommentList = React.createClass({

  render: function() {
      
    var messages = [];
    for(var message in this.props.messages) {
      var m ={};
      m["timestamp"]=this.props.messages[message].timestamp;
      m["text"]=this.props.messages[message].text;
      for(var user in this.props.user) {
        if(this.props.user[user].id==this.props.messages[message].sender) {
          //console.log()
          m["sender"]=this.props.user[user].Name;          
        }
        if(this.props.user[user].id==this.props.messages[message].reciever){
          m["reciever"]=this.props.user[user].Name
        }
      }
      messages.push(m);
    }

    var commentNod = messages.map(function (comment, index) {
      return <Comment key={index} timestamp={comment.timestamp} text={comment.text} author= {comment.sender} sender={comment.sender}>{comment.text} </Comment>;

    });
    return <div className='messages__list'>{commentNod}</div>;
     
  }
});

var CommentForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var text = this.refs.text.value.trim();
    this.props.onCommentSubmit({text: text});
    this.refs.text.value = '';
  },


  render: function() {
    
    return (
      <div className='textInput'>
        <form className='messages__form' onSubmit={this.handleSubmit}>

          <input type='text' className='text'placeholder='Say something...' ref='text' />
          <input type='submit' value='Post' className='button button--default' />
          
        </form>
      </div>
    );
  }
});









var CommentBox = React.createClass({
  mixins: [ReactFireMixin],
    getInitialState: function() {
    return {
      data: [],
      user: [],
      messages: [],
      pageId:'10157088346385597'
    };
  },
  handleCommentSubmit: function(comment) {
    // Here we push the update out to Firebase and let ReactFire update this.state.data
    console.log(this.props)
    console.log(this.state)
    comment['sender']=String(this.props.facebookResponse.userID);
    comment['reciever']=this.state.pageId;
    comment['timestamp']=Date.now();
    comment['read']=0;
    this.firebaseRefs['messages'].push(comment);
  },



  componentWillMount: function() {
    // Here we bind the component to Firebase and it handles all data updates,
    // no need to poll as in the React example.
    this.bindAsArray(firebase.database().ref('user'), 'user');
    this.bindAsArray(firebase.database().ref('messages'), 'messages');
  },

  render: function() {
    
    
    
    return (
      <div className='commentBox'>
        <h1>Messages</h1>
        <CommentList messages={this.state.messages} user={this.state.user} sender={this.state.currentUserId} reciever={this.state.pageId}/>

        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

//Don't touch for now

class MessagesLayout extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedTalent: 'All'
    };
  };

  render() {
    const { facebookResponse } = this.props
        return (
      <div className="page">
        <CommentBox facebookResponse={facebookResponse} />
      </div>
    )
    
  }
}

const mapStateToProps = (state) => {
  return {
    facebookResponse: state.facebookResponse
  }
}


export default connect(mapStateToProps)(MessagesLayout);

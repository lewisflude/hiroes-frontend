import React from 'react';
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
    //console.log(Date.now())
    // <h2 className='commentAuthor'>{this.props.sender}</h2>
    //<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className='comment'>
        
        <h2 className='commentAuthor'>{this.props.author}</h2>
        <h4 className='text'>{this.props.text}</h4>
        <h3 className='timestamp'>{this.props.timestamp}</h3>

        
        
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
    var commentNodes = this.props.messages.map(function (comment, index) {
      //console.log(comment);
      return <Comment key={index} author={comment.author}>{comment.text}</Comment>;
    });
    console.log(commentNodes)

    var commentNod = messages.map(function (comment, index) {
      return <Comment key={index} timestamp={comment.timestamp} text={comment.text} author= {comment.sender} sender={comment.sender}>{comment.text} </Comment>;

    });
    console.log("nof")
    console.log(commentNod)
    
    //return <div className='commentList'>{commentNodes}</div>;
    return <div className='commentList'>{commentNod}</div>;
     
  }
});










var CommentForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.value = '';
    this.refs.text.value = '';
  },


  render: function() {
    
    return (
      <div className='textInput'>
        <form className='commentForm' onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Your name' ref='author' />

          <input type='text' placeholder='Say something...' ref='text' />
          <input type='submit' value='Post' className='button button--default' />
          
        </form>
      </div>
    );
  }
});









var CommentBox = React.createClass({
  mixins: [ReactFireMixin],

  handleCommentSubmit: function(comment) {
    // Here we push the update out to Firebase and let ReactFire update this.state.data
    console.log(this.state.user)
    comment['sender']=this.state.currentUserId;
    comment['reciever']=this.state.pageId;
    comment['timestamp']=Date.now();
    comment['read']=0;
    this.firebaseRefs['data'].push(comment);
    this.firebaseRefs['messages'].push(comment);
  },

  getInitialState: function() {
    return {
      data: [],
      user: [],
      messages: [],
      currentUserId:'10157188468930220',
      pageId:'10157088346385597'
    };
  },

  componentWillMount: function() {
    // Here we bind the component to Firebase and it handles all data updates,
    // no need to poll as in the React example.
    this.bindAsArray(firebase.database().ref('commentsBox'), 'data');
    this.bindAsArray(firebase.database().ref('user'), 'user');
    this.bindAsArray(firebase.database().ref('messages'), 'messages');


  },

  render: function() {
   // console.log(this.state.user);
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

    
    

    return (
      <div className="page">
        <CommentBox />
      </div>
    )
    
  }
}


export default MessagesLayout;
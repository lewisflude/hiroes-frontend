import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import configureStore from '../store/configureStore'

const store = configureStore();

class Header extends React.Component {

  render() {
    const { facebookResponse } = this.props
    const getFacebookResponse = (response) => {
      
      $.post(
        "https://hiroes.herokuapp.com/addUser",
        { 
          name: response.name, 
          email: response.email, 
          picture: "http://graph.facebook.com/"+response.id+"/picture?type=large", 
          gender: response.gender,
          id: response.id 
        }, function(result){
          try {
             
          }
          catch (e) {
            
             logMyErrors(e); 
          }
      });
      this.props.dispatch({
        type: 'GET_FACEBOOK_RESPONSE',
        response: response
      })
    }

    var loginButton;

    if (this.props.facebookResponse.name === undefined) {
      loginButton = <FacebookLogin
              appId="1553761041593423"
              autoLoad={true}
              fields="name,email,picture,gender"
              callback={getFacebookResponse} 
              cssClass="button button--facebook"
              />
    } else {
      loginButton = <a className="button button--default">{this.props.facebookResponse.name}</a>
    }

    return (
      <header>
        <div className="container">
          <div className="col-2">
            <img className="header__logo" src="../img/header__logo.png" />
          </div>
          <div className="col-10">
            <div className="header__login-container">

              <Link to={`/`}>Home</Link>
              <Link to={`messages`}>Messages</Link>
              {loginButton}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    facebookResponse: state.facebookResponse
  }
}

export default connect(mapStateToProps)(Header);

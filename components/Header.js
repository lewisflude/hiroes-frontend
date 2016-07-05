import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router'


class Header extends React.Component {

  render() {
    const responseFacebook = (response) => {
      
      $.post(
        "https://hiroes.herokuapp.com/addUser",
        { 
          name: response.name, 
          email: response.email, 
          picture: "http://graph.facebook.com/"+response.id+"/picture?type=large", 
          gender: response.gender,
          id: response.id 
        }, function(result){
          console.log(response);
          try {
             
          }
          catch (e) {
            
             logMyErrors(e); 
          }
      });
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
              <FacebookLogin
              appId="1553761041593423"
              autoLoad={true}
              fields="name,email,picture,gender"
              callback={responseFacebook} 
              cssClass="button button--facebook"
              />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;

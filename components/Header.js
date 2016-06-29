import React from 'react';
import FacebookLogin from 'react-facebook-login';

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
        },function(result){
      }
      );
    }


    return (
      <header>
        <div className="container">
          <div className="header__login-container">

            <FacebookLogin
            appId="1553761041593423"
            autoLoad={true}
            fields="name,email,picture,gender"
            callback={responseFacebook} 
            cssClass="button button--facebook"
            />
          </div>
        </div>
      </header>
    )
  }
}

export default Header;

//import React from "react";

//import {AuthConsumer} from "../../authContext";

// export const UserId = () => (
//   'popcycle'
//  );


// export default UserId;

import axios from 'axios';
import decode from 'jwt-decode';
//import { browserHistory } from 'react-router';
import Auth0Lock from 'auth0-lock';


const ID_TOKEN_KEY = 'id_token';
// eslint-disable-next-line
var options = {
  auth: {
    params: {scope: 'openid profile'},
    redirectUrl: `${window.location.origin}`,
      responseType: 'token'
  }
}; 

const lock = new Auth0Lock('duk2Bxt6d25Li-EvdlKEQea6it2XCg6M', 'salon-app.auth0.com', {
    auth: {
      redirectUrl: `${window.location.origin}`,
      responseType: 'token',
      params: {scope: 'openid profile'}
    }
  }
);

lock.on('authenticated', authResult => {
  debugger;
  setIdToken(authResult.idToken);
  var email;
  var nickname;
  if(authResult.idTokenPayload.user_id.split("|")[0] === "facebook"){
    email = authResult.idTokenPayload.email;
    nickname = authResult.idTokenPayload.name;
  } else if(authResult.idTokenPayload.user_id.split("|")[0] === "google-oauth2"){
    email = authResult.idTokenPayload.email;
    nickname = authResult.idTokenPayload.nickname;
  } else {
    email = authResult.idTokenPayload.name;
    nickname = authResult.idTokenPayload.username;
  }
  
  var user = {
    email: email,
    nickname: nickname,
    user_id: authResult.idTokenPayload.user_id
  };

  localStorage.setItem('User', JSON.stringify(user));
  var request = axios.post('http://localhost:3000/api/users', {
    email: email,
    nickname: nickname
  });
  request.then(function(response) {
      if (response.data.message) {
        //alert(response.data.message);
        if(response.data.diffName){
          user = {
            email: email,
            nickname: response.data.nickname,
            user_id: authResult.idTokenPayload.user_id
          };
        }
        localStorage.setItem('User', JSON.stringify(user));
      }
    })
    .catch(function(error) {
      console.log(error);
    });
});
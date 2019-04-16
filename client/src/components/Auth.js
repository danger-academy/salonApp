import React, {Component} from "react";
import auth0 from "auth0-js";
import {AUTH_CONFIG} from "../auth0-variables";
import {AuthProvider} from "../authContext";
import API from "../utils/API";

const auth = new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: `https://${AUTH_CONFIG.domain}/userinfo`,
  responseType: "token id_token"
});

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            authenticated: false,
            user: {
                role: "visitor"
            },
            accessToken: ""
        }
    }

  initiateLogin = () => {
    auth.authorize();
  };

  logout = () => {
    this.setState({
      authenticated: false,
      user: {
        role: "visitor"
      },
      accessToken: ""
    });
  };

  handleAuthentication = () => {
    auth.parseHash((error, authResult) => {
      if (error) {
        console.log(error);
        console.log(`Error ${error.error} Occured`);
        return;
      }

      this.setSession(authResult.idTokenPayload);
    });
  };

  setSession(data) {
    const user = {
      id: data.sub,
      email: data.email,
      role: data[AUTH_CONFIG.roleUrl]
    };
    this.setState({
      authenticated: true,
      accessToken: data.accessToken,
      user
    });
    // const userData = user.email;
    this.isTheUserReal(user);
  }

  isTheUserReal = async(user) => {
      console.log("the search begins " + user.email);
      API.findTheUser(user.email)
        .then(res => {
            if (res.data === null) {
                console.log("Nothing to see here");
                API.saveTheUser({
                    user_id: user.id,
                    email: user.email
                })
                    .then(result => console.log("created a user " + result.data.email));
            }
            else {
                console.log("user already be there " + res.data.email);
            }
        })
  }

  render() {
    const authProviderValue = {
      ...this.state,
      initiateLogin: this.initiateLogin,
      handleAuthentication: this.handleAuthentication,
      logout: this.logout
    };
    return (
      <AuthProvider value={authProviderValue}>
        {this.props.children}
      </AuthProvider>
    );
  }
}

export default Auth;

import React from "react";
import { Authenticator, ConfirmSignUp, SignOut } from "aws-amplify-react";
import { CustomSignIn } from "./CustomSignIn";
import { CustomSignUp } from "./CustomSignUp";
import config from "./aws-exports";
import PrivateContent from "./PrivateContent";

const authTheme = {
  button: {
    backgroundColor: "#FFD800"
  },
  signInButton: {
    backgroundColor: "#FFD800"
  },
  navButton: {
    marginLeft: 12,
    borderRadius: 4,
    backgroundColor: '#FFD800',
    color: '#000',
  },
}

class AppWithAuth extends React.Component {

  render() {
    return (
      <div>
        <Authenticator hideDefault={true} amplifyConfig={config} theme={authTheme}>
          <CustomSignUp lang={this.props.lang} />
          <CustomSignIn lang={this.props.lang} />
          <ConfirmSignUp />
          <PrivateContent lang={this.props.lang} />
          <SignOut />
        </Authenticator>
      </div>
    );
  }
}

export default AppWithAuth;
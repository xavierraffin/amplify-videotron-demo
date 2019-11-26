import React from "react";
import { Authenticator, SignIn, SignOut } from "aws-amplify-react";
import { CustomSignIn } from "./CustomSignIn";
import config from "./aws-exports";
import PrivateContent from "./PrivateContent";

const authTheme = {
    button: {
        backgroundColor: "blue"
    },
    signInButton:{
        backgroundColor: "blue"
    },
    navButton: {
      marginLeft: 12,
      borderRadius: 4,
      backgroundColor: '#30d0fe',
    },
  }

class AppWithAuth extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Authenticator hideDefault={true}  amplifyConfig={config} theme={authTheme}>
          <SignOut />
          <CustomSignIn lang={this.props.lang} />
          <PrivateContent lang={this.props.lang} />
        </Authenticator>
      </div>
    );
  }
}

export default AppWithAuth;
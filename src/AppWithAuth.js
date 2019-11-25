import React from "react";
import { Authenticator } from "aws-amplify-react";
import { CustomSignIn } from "./CustomSignIn";
import config from "./aws-exports";
import App from "./App";

class AppWithAuth extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Authenticator hideDefault={true}  amplifyConfig={config}>
          <CustomSignIn />
          <App />
        </Authenticator>
      </div>
    );
  }
}

export default AppWithAuth;
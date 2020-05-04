import React from 'react';
import { i18n } from "./i18n";

class PrivateContent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.authState === "signedIn") {
      return (
        <div>
          <h1>{i18n("This is private content", this.props.lang)}</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{i18n("You are not logged in", this.props.lang)}</h1>
        </div>
      );
    }
  }
}

export default PrivateContent;

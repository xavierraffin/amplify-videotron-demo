import React from "react";
import { SignIn } from "aws-amplify-react";
import { i18n } from "./i18n";

export class CustomSignIn extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }

  showComponent(theme) {
    return (
      <div className="mx-auto w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              { i18n("Username", this.props.lang) }
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              key="username"
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              { i18n("Password", this.props.lang) }
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              key="password"
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="******************"
            />
            <p className="text-grey-dark text-xs">
              { i18n("Forgot your password? ", this.props.lang) }
              <a
                className="text-indigo cursor-pointer hover:text-indigo-darker"
                onClick={() => super.changeState("forgotPassword")}
              >
                { i18n("Reset Password", this.props.lang) }
              </a>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => super.signIn()}
            >
              { i18n("Login", this.props.lang) }
            </button>
            <p className="text-grey-dark text-xs">
              { i18n("No Account? ", this.props.lang) }
              <a
                className="text-indigo cursor-pointer hover:text-indigo-darker"
                onClick={() => super.changeState("signUp")}
              >
                { i18n("Create account", this.props.lang) }
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
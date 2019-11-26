import { SignUp } from "aws-amplify-react";
import { i18n } from "./i18n";
import React from 'react';

export class CustomSignUp extends SignUp {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signUp"];
  }

  validate() {
    return [];
  }

  signUp() {
    this.inputs["custom:lang"] = this.props.lang;
    this.signUpFields.push({   
      label: "custom:lang",
      key: "custom:lang",
      placeholder: "",
      required: false,
      displayOrder: 8,
      custom: true,
      type: "string"
     });
    super.signUp();
  }

  showComponent(theme) {
    if (super.checkCustomSignUpFields()) {
			super.signUpFields = super.props.signUpConfig.signUpFields;
		}
		super.sortFields();
    return (
      <div className="mx-auto w-full max-w-xs login-div">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 login-form">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              { i18n("Username", this.props.lang) }
            </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              key="username"
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder={ i18n("Username", this.props.lang) }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              { i18n("Password", this.props.lang)}
            </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              key="password"
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="******************"
            />
          </div>

          <div className="mb-6">
          <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="email"
            >
              { i18n("Email", this.props.lang)}
            </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              key="email"
              name="email"
              onChange={this.handleInputChange}
              type="email"
              placeholder=""
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="connexion bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => this.signUp()}
            >
              { i18n("Create Account", this.props.lang) }
            </button><br/><br/>
            <p className="text-grey-dark text-xs">
              { i18n("Have an account? ", this.props.lang) }
              <a
                className="mylink text-indigo cursor-pointer hover:text-indigo-darker"
                onClick={() => super.changeState("signIn")}
              >
                { i18n("Sign in", this.props.lang) }
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
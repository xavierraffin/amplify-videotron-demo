import React from 'react';
import AppWithAuth from "./AppWithAuth";
import { i18n, LANG } from "./i18n";
import './App.css';

const NAVIGATION = {
  CUSTOMER_PAGE: 'customer',
  MAIN_PAGE: 'main'
}


class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { activePage: NAVIGATION.MAIN_PAGE, lang: LANG.FR };
  }

  navigate(nav) {
    this.setState({ activePage: nav });
  }

  toggleLang() {
    if(this.state.lang == LANG.FR) this.setState({ lang: LANG.EN });
    else this.setState({ lang: LANG.FR });
  }

  contentI18n(term){
    return(<div className='content'> { i18n(term, this.state.lang) } </div>);
  }

  render() {
    return(
      <div>
        <div className="App-header">
          <div className="logo"><div className="logoInner" /></div>
          <a className="navVid1 navVid" onClick={()=>this.navigate(NAVIGATION.MAIN_PAGE)}>{i18n("HOME", this.state.lang)}</a>
          <a className="navVid2 navVid" onClick={()=>this.navigate(NAVIGATION.CUSTOMER_PAGE)}>{i18n("CUSTOMER CENTER", this.state.lang)}</a>
          <a className="navVid3 navVid" onClick={()=>this.toggleLang()}>{this.state.lang}</a>
        </div>
        { this.state.activePage == NAVIGATION.MAIN_PAGE && this.contentI18n("GET A SAMSUNG TABLET AS A GIFT with the purchase of a selected Samsung device at $01 and a 24-month subscription to a Zen plan") }
        { this.state.activePage == NAVIGATION.CUSTOMER_PAGE && <AppWithAuth lang={this.state.lang}/> }
      </div>
    );
  }
}

export default App;

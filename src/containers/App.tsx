import React, {Component} from 'react';
import LangSwitcher from '../components/LangSwitcher';
import LocalValue from '../components/LocalValue';
import logo from '../logo.svg';
import './App.css';
import {DEFAULT_LOCALE} from '../constants/languages';


interface Props{};

interface State {
  locale: string,
}

export default class App extends Component <Props,State> {
  constructor(props: Props){
    super(props);

    this.state = {
      locale: DEFAULT_LOCALE,
    }

  }

  langChangeHandler = (locale: string) => {
   this.setState({locale: locale});
  }  
  
  render() {
    const {locale} = this.state;
     return (
       <>
        <LangSwitcher setLanguage={this.langChangeHandler} locale = {this.state.locale}/>
        <div className="row">
          <div className="col-md-6">
            <h1><LocalValue locale={locale} keyString='title'/></h1>
            <h2><LocalValue locale={locale} keyString='subtitle'/></h2>
            <ol>
              <li><LocalValue locale = {locale} keyString = 'step1'/></li>
              <li><LocalValue locale = {locale} keyString = 'step2'/></li>
              <li><LocalValue locale = {locale} keyString = 'step3'/></li>
            </ol>
          </div>
          <div className="col-md-6">
            
          </div>
        </div>
       </>
     );
  }
}

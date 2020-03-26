import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import {isIOS} from 'react-device-detect';
import LangSwitcher from '../components/LangSwitcher';
import LocalValue from '../components/LocalValue';
import logo from '../logo.svg';
import '../styles/App.scss';
import {DEFAULT_LOCALE} from '../constants/languages';
import {TRANSLATIONS, REASONS, REASONS_LONG} from '../constants/translations';
import {PHONE_NUMBER, IPHONE_SEPARATOR, ANDROID_SEPARATOR, NUM_REASONS} from '../constants/general';

import menoumeSpiti from '../images/MenoumeSpiti-banner.png';

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

  messageComposer (reason: number): string  {
    const userName: string = 'Animesh Rawal';
    const userAddress: string = 'Varasovas 37, Glyfada';
    const separator: string = isIOS?IPHONE_SEPARATOR:ANDROID_SEPARATOR;

    if (reason < 1 || reason > 6){
      console.error('Unknown Reason');
      return '';
    }

    return `sms:${PHONE_NUMBER}${separator}body=1 ${userName} ${userAddress}`;
  }


  
  render() {
    const {locale} = this.state;
    const collapsibles=[];
    
    for (let i:number=0; i<NUM_REASONS; i++){
      collapsibles.push(
        <Collapsible trigger={TRANSLATIONS[locale][REASONS[i]]}>
          <p>{TRANSLATIONS[locale][REASONS_LONG[i]]}</p>
          <a href={this.messageComposer(1)} className="button" role="button">{TRANSLATIONS[locale]['buttonText']}</a>
        </Collapsible>
      );
    }

    return (
      <>
      <div className = 'langContainer'>
        <LangSwitcher setLanguage={this.langChangeHandler} locale = {this.state.locale}/>
      </div>
      <div className='headerImg'>
        <img src={menoumeSpiti} alt="#menoumespiti" width = '100%'/>
      </div>
      <div className="row">
        <div className="intro">

          <h2><LocalValue locale={locale} keyString='subtitle'/></h2>
          <ol>
            <li><LocalValue locale = {locale} keyString = 'step1'/></li>
            <li><LocalValue locale = {locale} keyString = 'step2'/></li>
            <li><LocalValue locale = {locale} keyString = 'step3'/></li>
          </ol>
        </div>
        <div className="col-md-6">
          {collapsibles}
        </div>
      </div>
      </>
    );
  }
}

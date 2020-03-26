import React, {Component, ChangeEvent} from 'react';
import Collapsible from 'react-collapsible';
import {isIOS} from 'react-device-detect';
import LangSwitcher from '../components/LangSwitcher';
import LocalValue from '../components/LocalValue';
import Footer from '../components/Footer';
import UserData from './UserData';


import '../styles/App.scss';
import {DEFAULT_LOCALE} from '../constants/languages';
import {TRANSLATIONS, REASONS, REASONS_LONG, NUM_REASONS} from '../constants/translations';
import {PHONE_NUMBER, IPHONE_SEPARATOR, ANDROID_SEPARATOR, NAMEKEY, ADDRESSKEY} from '../constants/general';

import menoumeSpiti from '../images/MenoumeSpiti-banner.png';


interface Props{}

interface State {
  locale: string,
  userName: string,
  userAddress: string,
  isDirty: boolean,
}

export default class App extends Component <Props,State> {
  constructor(props: Props){
    super(props);

    this.state = {
      locale: DEFAULT_LOCALE,
      userName: '',
      userAddress: '',
      isDirty: false,
    } as State;

  }

  langChangeHandler = (locale: string) => {
   this.setState({locale: locale});
  }  

  nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (this.state.userName !== event.target.value){
      this.setState({
        userName: event.target.value,
        isDirty: true,
      });
    }
  }

  addressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (this.state.userAddress !== event.target.value){
        this.setState({
        userAddress: event.target.value,
        isDirty: true,
      });
    }
  }

  storeUserData = () => {
    if (this.state.isDirty){
      localStorage.setItem(NAMEKEY,this.state.userName);
      localStorage.setItem(ADDRESSKEY, this.state.userAddress);
      this.setState({isDirty:false});
    }
  }

  componentDidMount = () => {
    if(!this.state.userName && !this.state.userAddress){
      console.log('getting local storage');
      let name = localStorage.getItem(NAMEKEY);
      let address = localStorage.getItem(ADDRESSKEY);
      if(!name){
        console.log('name not found');
        name='';
      } else{
        console.log('name',name);
      }
      
      if (!address){
        console.log('address not found');
        address='';
      }
      if (name || address){
        this.setState({userName:name, userAddress:address, isDirty:false});
      }
    }
    console.log ('from didmount', this.state);
  }

  messageComposer = (reason: number): string =>  {
    const {userName, userAddress} = this.state;
    const separator: string = isIOS?IPHONE_SEPARATOR:ANDROID_SEPARATOR;

    if (reason < 1 || reason > 6){
      console.error('Unknown Reason');
      return '';
    }
    console.log(`sms:${PHONE_NUMBER}${separator}body=${reason} ${userName} ${userAddress}`);
    return `sms:${PHONE_NUMBER}${separator}body=${reason} ${userName} ${userAddress}`;
  }
  
  render() {
    const {locale, userName, userAddress} = this.state;
    const collapsibles=[];
    
    for (let i:number=0; i<NUM_REASONS; i++){
      if (userName && userAddress){
        collapsibles.push(
          <Collapsible trigger={TRANSLATIONS[locale][REASONS[i]]} key={i}>
            <p>{TRANSLATIONS[locale][REASONS_LONG[i]]}</p>
            <a 
              href={this.messageComposer(i+1)} 
              className="button" role="button"
              onClick = {this.storeUserData}
            >{TRANSLATIONS[locale]['buttonText']}</a>
          </Collapsible>
        );
      } else{
        collapsibles.push(
          <Collapsible trigger={TRANSLATIONS[locale][REASONS[i]]} key={i}>
            <p>{TRANSLATIONS[locale][REASONS_LONG[i]]}</p>
          </Collapsible>
        );
      };

    };

    return (
      <>
      <div className = 'langContainer'>
        <LangSwitcher setLanguage={this.langChangeHandler} locale = {this.state.locale}/>
      </div>
      <div className='headerImg'>
        <img src={menoumeSpiti} alt="#menoumespiti" width = '100%'/>
      </div>
      <div className="main">
        <div className="intro">

          <h2><LocalValue locale={locale} keyString='subtitle'/></h2>
          <p>
            <LocalValue locale = {locale} keyString = 'intro'/><br /><br />
            <LocalValue locale = {locale} keyString = 'step1'/><br />
            <LocalValue locale = {locale} keyString = 'step2'/><br />
            <LocalValue locale = {locale} keyString = 'step3'/>
          </p>
        </div>
        <UserData 
          locale={locale} 
          name={userName}
          address = {userAddress}
          onNameChange={this.nameChangeHandler}
          onAddressChange={this.addressChangeHandler}
        ></UserData>
        <div>
          {collapsibles}
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
      </>
    );
  }
}

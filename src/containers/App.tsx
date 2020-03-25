import React, {Component} from 'react';
import LangContainer from './LangContainer';
import LocalValue from '../components/LocalValue';
import logo from '../logo.svg';
import './App.css';
import * as Trans from '../constants/translations';


interface Props{};

interface State {
  locale: string,
}

export default class App extends Component <Props,State> {
  constructor(props: Props){
    super(props);

    this.state = {
      locale: 'el_GR',
    }

  }

  langChangeHandler = (locale: string) => {
   console.log(`setting locale to ${locale}` );
   this.setState({locale: locale});
   
  }  
  render() {
    const {locale} = this.state;
     return (
       <>
        <LangContainer setLanguage={this.langChangeHandler} locale = {this.state.locale}/>
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
     //<div>{Trans.TRANSLATIONS[this.state.locale][this.state.title]}</div>

     );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

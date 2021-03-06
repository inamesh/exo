This is an open source project and I welcome contributions to make it better, faster or prettier!

## Background
In the 3rd week of March 2020, movement restrictions were imposed in Greece due to the rapid spread of coronavirus. 
On 4th May, the restrictions were lifted.

As of 7th Nov 2020, the restrictions are imposed once again. 

All residents of Greece are required to send a message to the number 13033 (free of charge) with a reason code followed by their name and address before leaving their place of residence.

### Functionality

The web app displays all the reasons and allows user to compose an SMS on both iOS and Android devices.
The app also remembers the user's name and address so that they do not have to enter it again.

### Official Source

Official process and reason codes can be found on <a href="https://forma.gov.gr/#sms" target="_blank">forma.gov.gr</a>

### Contribute
I will be happy to accept pull requests, especially for additional translations.
1. Add your locale string as a constant in src\constants\languages.ts 
    (eg: `export const ELGR:string = 'el_GR';`) 
2. Add a display name for the language to the `LANGUAGE` array.
    (eg: `{ locale: ELGR, displayName: 'ΕΛ' },`)
3. Add your translations to the TRANSLATIONS object in src\constants\translations.ts

## Credits
Made with create-react-app, hosted on <a href="https://zeit.co/" target="_blank">Zeit</a>.
Language switcher inspired by <a href="https://github.com/tvanro/react-redux-translation-example" target="_blank">tvanro</a>.

Privacy-first analytics by <a href="https://usefathom.com/" target="_blank">Fathom</a> (number of users & visits only; no other data), self-hosted on Digital Ocean.

Input styling from code shared by <a href="https://codepen.io/jordanoaragao/pen/teqFw" target="_blank">Jordano Aragão</a>
The rest is in the packages!

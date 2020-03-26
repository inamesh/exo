import React from 'react';
import '../styles/UserData.scss';
import {TRANSLATIONS} from '../constants/translations'

interface Props{
    locale: string, 
    name: string,
    address: string,
    onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function UserData (props: Props) {
    return (
        <div className="shoop" >
        <span >
            <input 
              className = 'balloon'
              onChange = {props.onNameChange}
              type="text" name="name"  id="name" 
              value={props.name}
              placeholder={TRANSLATIONS[props.locale]['tomName']}
            />
            <label htmlFor="name">{TRANSLATIONS[props.locale]['fullName']}</label>
        </span>                
        <span >
            <input 
              className = 'balloon'
              onChange = {props.onAddressChange}
              type="text" name="address"  id="address" 
              value={props.address}
              placeholder={TRANSLATIONS[props.locale]['tomAddress']}
            />
            <label htmlFor="address">{TRANSLATIONS[props.locale]['address']}</label>
        </span>
      </div>
    );
}




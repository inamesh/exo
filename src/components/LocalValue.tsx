import React from 'react';
import {LocalContent, TRANSLATIONS} from '../constants/translations';


interface Props{
    locale: string, 
    keyString: keyof(LocalContent),
}

export default function LocalValue (props: Props) {
    return <>{TRANSLATIONS[props.locale][props.keyString]}</>;
}
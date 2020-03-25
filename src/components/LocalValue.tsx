import React, {Component} from 'react';
import * as Trans from '../constants/translations';


interface Props{
    locale: string, 
    keyString: keyof(Trans.LocalContent),
}


// export default class LocalValue extends Component<Props> {
//     static defaultProps = {
//         locale:'el-GR',
//     }

//     return (Trans.TRANSLATIONS[locale][key]);
// }

export default function LocalValue (props: Props) {
    //console.log(`Locale is ${props.locale}, key is ${props.keyString}. Value is ${Trans.TRANSLATIONS[props.locale][props.keyString]}`);
    return (<>{Trans.TRANSLATIONS[props.locale][props.keyString]}</>);
}
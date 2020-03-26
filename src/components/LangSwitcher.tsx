import React from 'react';
import {Language, LANGUAGES} from '../constants/languages';

interface Props{
    locale: string, 
    setLanguage: (locale:string) => void,
}

export default function LangSwitcher (props: Props){
    return(
        <>
        {LANGUAGES.map
            ((language:Language, i:number) =>{
                    return(
                        <button
                            key={i}
                            className = 'lang'
                            style={{ fontWeight: (props.locale === language.locale ? 'bold' : 'normal') }}
                            onClick={()=>props.setLanguage(language.locale)}
                        >
                        {language.displayName}
                        </button>
                    );
            })
        }
        </>
    );
}
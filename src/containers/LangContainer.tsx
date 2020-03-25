import React, { Component } from 'react';
import * as Trans from '../constants/translations';

interface Props{
    locale: string, 
    setLanguage: Function,
}

export default class LangContainer extends Component<Props> {
    static defaultProps = {
        locale: 'el-GR',
    }

    render () {
        //render(){
        return(
            
            <div className="lang" style={{ padding: 20, textAlign: 'center' }}>
            {Trans.LANGUAGES.map
                ((language:Trans.Language, i:number) =>{
                        return(
                            <button
                                key={i}
                                style={{ fontWeight: (this.props.locale === language.locale ? 'bold' : 'normal') }}
                                onClick={() => this.props.setLanguage(language.locale)}
                            >
                            <span>{language.displayName}</span>
                            </button>
                        );
                })
            }
            </div>
        );
    }
}
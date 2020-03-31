/**
 * CONSTANTS FTW!
 */

export const ENUS:string = 'en_US';
export const ELGR:string = 'el_GR';
export const DEDE:string = 'de_DE';
export const NLNL:string = 'nl_NL';
export const FRFR:string = 'fr_FR';
export const AR:string = 'AR';

export const RTLTAGS:string='ar,'

export const LANGUAGES: Array<Language> = [
    { locale: ELGR, displayName: 'ΕΛ', tag: 'el' },
    { locale: FRFR, displayName: 'FR', tag:'fr' },
    { locale: NLNL, displayName: 'NL', tag:'nl' },
    { locale: DEDE, displayName: 'DE', tag: 'de' },    
    { locale: AR, displayName: 'AR',tag:'ar' },
    { locale: ENUS, displayName: 'EN', tag:'en' },
]

export const DEFAULT_LOCALE = ELGR;

/**
 *  ----------------TYPES---------------------
 * Because.
 */

export type Language = {
    locale: string,
    displayName: string,
    tag: string,
};


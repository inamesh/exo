/**
 * CONSTANTS FTW!
 */

export const ENUS:string = 'en_US';
export const ELGR:string = 'el_GR';
export const DEDE:string = 'de_DE'
export const AR:string = 'AR';

export const RTLTAGS:string='ar,'

export const LANGUAGES: Array<Language> = [
    { locale: ENUS, displayName: 'EN', tag:'en' },
    { locale: AR, displayName: 'AR',tag:'ar' },
    { locale: DEDE, displayName: 'DE', tag: 'de' },    
    { locale: ELGR, displayName: 'ΕΛ', tag: 'el' },
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


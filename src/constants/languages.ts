/**
 * CONSTANTS FTW!
 */

export const ENUS:string = 'en_US';
export const ELGR:string = 'el_GR';

export const LANGUAGES: Array<Language> = [
    { locale: ENUS, displayName: 'EN' },
    { locale: ELGR, displayName: 'ΕΛ' },
]

export const DEFAULT_LOCALE = ELGR;

/**
 *  ----------------TYPES---------------------
 * Because.
 */



export type Language = {
    locale: string,
    displayName: string,
};


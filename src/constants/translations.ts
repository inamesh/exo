
/**
 * CONSTANTS FTW!
 */


export const LANGUAGES: Array<Language> = [
    { locale: 'en_US', displayName: 'EN' },
    { locale: 'el_GR', displayName: 'ΕΛ' },
]

export const TRANSLATIONS: Translations = {
    en_US: {
        title:      'Stay Home!',
        subtitle:   'Get out if you must',
        step1:      'Enter your deets',
        step2:      'Select Reason',
        step3:      'Send SMS',
        firstName:  'First Name',
        lastName:   'Last Name',
        address:    'Address', 
        reason1:    'Pharmacy/ Doctor',
        reson1Long: 'Going to the pharmacy or visiting a Medical Doctor, in the case that this is recommended after consultation.',
        reason2:    'Supplies/ Groceries',
        reson2Long: 'Going to a supply store in operation (super markets, mini markets etc), which can not ship or deliver its goods.',
        reason3:    'Bank',
        reson3Long: 'Going to the bank, when electronic transactions are not possible.',
        reason4:    'Help Someone',
        reson4Long: 'Going to help people in need.',
        reason5:    'Ceremony/ Visitation',
        reson5Long: 'Going to a ceremony (e.g., funeral, marriage, baptism) under the conditions provided by law; or movement of divorced or legally separated parents in the context of parental responsibility, custody, or visiting rights in accordance with the applicable provisions.',
        reason6:    'Exercise/ Pet Care',
        reson6Long: 'Physical exercise in an open space or for a pet’s needs; individually or up to 2 people. In the latter case, a minimum distance of 1.5 meters must be kept at all times.',
    },
    el_GR: {
        title: 'Μένουμε σπίτι!',
        subtitle: 'Βγαίνουμε αν χρειαστεί',
        step1: 'Enter your deets',
        step2: 'Select Reason',
        step3: 'Send SMS',
        firstName:  'First Name',
        lastName:   'Last Name',
        address:    'Address', 
        reason1:    'TBD',
        reson1Long: 'Μετάβαση σε φαρμακείο ή επίσκεψη στον γιατρό, εφόσον αυτό συνιστάται μετά από σχετική επικοινωνία.',
        reason2:    'TBD',
        reson2Long: 'Μετάβαση σε εν λειτουργία κατάστημα προμηθειών αγαθών πρώτης ανάγκης (σούπερ μάρκετ, μίνι μάρκετ), όπου δεν είναι δυνατή η αποστολή τους.',
        reason3:    'TBD',
        reson3Long: 'Μετάβαση στην τράπεζα, στο μέτρο που δεν είναι δυνατή η ηλεκτρονική συναλλαγή.',
        reason4:    'TBD',
        reson4Long: 'Κίνηση για παροχή βοήθειας σε ανθρώπους που βρίσκονται σε ανάγκη.',
        reason5:    'TBD',
        reson5Long: 'Μετάβαση σε τελετή (π.χ. κηδεία, γάμος, βάφτιση) υπό τους όρους που προβλέπει ο νόμος ή μετάβαση διαζευγμένων γονέων ή γονέων που τελούν σε διάσταση που είναι αναγκαία για τη διασφάλιση της επικοινωνίας γονέων και τέκνων, σύμφωνα με τις κείμενες διατάξεις.',
        reason6:    'TBD',
        reson6Long: 'Σωματική άσκηση σε εξωτερικό χώρο ή κίνηση με κατοικίδιο ζώο, ατομικά ή ανά δύο άτομα, τηρώντας στην τελευταία αυτή περίπτωση την αναγκαία απόσταση 1,5 μέτρου.',
    },
};



/**
 *  ----------------TYPES---------------------
 * Because.
 */

export interface LocalContent {
    title:      string,
    subtitle:   string,
    step1:      string,
    step2:      string,
    step3:      string,
    firstName:  string,
    lastName:   string,
    address:    string,    
    reason1:    string,
    reson1Long: string,
    reason2:    string,
    reson2Long: string,
    reason3:    string,
    reson3Long: string,
    reason4:    string,
    reson4Long: string,
    reason5:    string,
    reson5Long: string,
    reason6:    string,
    reson6Long: string,
    
}

export type Translations = {
    [locale: string]: LocalContent,
}


export type Language = {
    locale: string,
    displayName: string,
};

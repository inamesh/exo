
/**
 * CONSTANTS FTW!
 */

export const TRANSLATIONS: Translations = {
    en_US: {
        title:      'Stay Home!',
        subtitle:   '... and go out only if REALLY necessary',
        intro:      'Compose a message to 13033 easily and quickly with 3 simple steps:',
        step1:      'A - Enter your name & address (mandatory)',
        step2:      'B - Select the applicable reason',
        step3:      'C - Press the ✉ button to generate your message, ready to send!',
        fullName:   'NAME',
        address:    'ADDRESS', 
        reason1:    '⚕️ 1 - Pharmacy / Doctor',
        reason1Long: 'Going to the pharmacy or visiting a Medical Doctor, in the case that this is recommended after consultation.',
        reason2:    '🧀 2 - Essentials / Groceries',
        reason2Long: 'Going to a supply store in operation (super markets, mini markets etc), which can not ship or deliver its goods.',
        reason3:    '🏦 3 - Bank',
        reason3Long: 'Going to the bank, when electronic transactions are not possible.',
        reason4:    '🙏 4 - Help Someone',
        reason4Long: 'Going to help people in need.',
        reason5:    '💒 5 - Ceremony/ Visitation',
        reason5Long: 'Going to a ceremony (e.g., funeral, marriage, baptism) under the conditions provided by law; or movement of divorced or legally separated parents in the context of parental responsibility, custody, or visiting rights in accordance with the applicable provisions.',
        reason6:    '💪 6 - Exercise/ Pet Care',
        reason6Long: 'Physical exercise in an open space or for a pet’s needs; individually or up to 2 people. In the latter case, a minimum distance of 1.5 meters must be kept at all times.',
        buttonText: '✉ Create SMS',
        tomName:    'Tom Hanks',
        tomAddress: 'Ermou 500, Athens 10563',
    },
    el_GR: {
        title: 'Μένουμε σπίτι!',
        subtitle: '... και βγαίνουμε ΜΟΝΟ αν χρειαστεί',
        intro:  'Στείλτε μήνυμα στο 13033 εύκολα και γρήγορα με 3 απλά βήματα:',
        step1: 'Α - Συμπληρώστε τα στοιχεία σας (απαραίτητο)',
        step2: 'Β - Επιλέξτε λόγο',
        step3: 'Γ -  Πατήστε το κουμπί ✉ για να δημιουργήσετε το μήνυμά σας, και είναι έτοιμο να το στείλετε!',
        fullName:  'ΟΝΟΜΑ',
        address:    'ΔΙΕΥΘΥΝΣΗ', 
        reason1:    '⚕️ 1 - Φαρμακείο / Γιατρός',
        reason1Long: 'Μετάβαση σε φαρμακείο ή επίσκεψη στον γιατρό, εφόσον αυτό συνιστάται μετά από σχετική επικοινωνία.',
        reason2:    '🧀 2 - Σούπερ/Μίνι Μάρκετ',
        reason2Long: 'Μετάβαση σε εν λειτουργία κατάστημα προμηθειών αγαθών πρώτης ανάγκης (σούπερ μάρκετ, μίνι μάρκετ), όπου δεν είναι δυνατή η αποστολή τους.',
        reason3:    '🏦 3 - Τράπεζα',
        reason3Long: 'Μετάβαση στην τράπεζα, στο μέτρο που δεν είναι δυνατή η ηλεκτρονική συναλλαγή.',
        reason4:    '🙏 4 - Κίνηση για Βοήθεια',
        reason4Long: 'Κίνηση για παροχή βοήθειας σε ανθρώπους που βρίσκονται σε ανάγκη.',
        reason5:    '💒 5 - Τελετή / Επίσκεψη Τέκνων',
        reason5Long: 'Μετάβαση σε τελετή (π.χ. κηδεία, γάμος, βάφτιση) υπό τους όρους που προβλέπει ο νόμος ή μετάβαση διαζευγμένων γονέων ή γονέων που τελούν σε διάσταση που είναι αναγκαία για τη διασφάλιση της επικοινωνίας γονέων και τέκνων, σύμφωνα με τις κείμενες διατάξεις.',
        reason6:    '💪 6 - Άσκηση / Κίνηση ζώων',
        reason6Long: 'Σωματική άσκηση σε εξωτερικό χώρο ή κίνηση με κατοικίδιο ζώο, ατομικά ή ανά δύο άτομα, τηρώντας στην τελευταία αυτή περίπτωση την αναγκαία απόσταση 1,5 μέτρου.',
        buttonText: '✉ Αποστολή SMS',
        tomName:    'Τομ Χάνκς',
        tomAddress: 'Ερμού 500, Αθήνα 10563',
    },
};

export const NUM_REASONS = 6;
export const REASONS: Array<keyof(LocalContent)> = ['reason1','reason2','reason3','reason4','reason5','reason6'];
export const REASONS_LONG: Array<keyof(LocalContent)> = ['reason1Long','reason2Long','reason3Long','reason4Long','reason5Long','reason6Long'];
/**
 *  ----------------TYPES---------------------
 * Because.
 */

export interface LocalContent {
    title:      string,
    subtitle:   string,
    intro:      string,
    step1:      string,
    step2:      string,
    step3:      string,
    fullName:   string,
    address:    string,    
    reason1:    string,
    reason1Long: string,
    reason2:    string,
    reason2Long: string,
    reason3:    string,
    reason3Long: string,
    reason4:    string,
    reason4Long: string,
    reason5:    string,
    reason5Long: string,
    reason6:    string,
    reason6Long: string,
    buttonText: string,
    tomName: string,
    tomAddress: string,
}

export type Translations = {
    [locale: string]: LocalContent,
}

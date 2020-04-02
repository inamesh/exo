//TODO: translate footer text "PROPERLY"

import React from 'react';

import {ELGR} from '../constants/languages';

interface Props{
    locale: string, 
}


export default function Footer (props: Props) {
    if (props.locale===ELGR) {
        return (
            <div className='footerText'>
                Όλη η αποθήκευση και η επεξεργασία των δεδομένων γίνεται τοπικά στη συσκευή σου. <strong>ΚΑΜΙΑ ανίχνευση, ΚΑΝΕΝΑ cookie</strong>. <br /> 100% δωρεάν και <a href='https://github.com/inamesh/exo' target='_blank' rel='noopener noreferrer'>ανοιχτού κώδικα</a>. Φτιαγμένο με 🙏 και ❤️ στην Αθήνα. Για σχόλια/προτάσεις/σφάλματα, επικοινώνησε μαζί μου μέσω <a href='https://twitter.com/inamesh' target='_blank' rel='noopener noreferrer'>Twitter</a>.
            </div>
        )
    } else{
        return (
            <div className='footerText'>
                All your data is cached and processed locally on your device. <strong>NO tracking, NO cookies</strong>. <br /> 100% free and <a href='https://github.com/inamesh/exo' target='_blank' rel='noopener noreferrer'>open source</a>. Built with 🙏 and ❤️ in Athens, Greece. Please contact me on <a href='https://twitter.com/inamesh' target='_blank' rel='noopener noreferrer'>Twitter</a> with any comments / suggestions / bugs.
            </div>
        )
    }

}

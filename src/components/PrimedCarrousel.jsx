import { useState } from 'react';

import PrimNotYour from '../assets/img/categories/Primed/prim-not-your.png';
import PrimWomen from '../assets/img/categories/Primed/prim-women.png';
import PrimeFille from '../assets/img/categories/Primed/prim-fille.png';
import '../scss/components/_primedcarrousel.scss'
// import '../scss/style.scss';

function PrimedCarrousel() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div>
            <img alt="Image de ..." src={PrimeFille} className=''/>
            <p>Petite fille</p>

            <img alt="Image de ..." src={PrimWomen} className='' onClick={() => setModalIsOpen(true)}/>
            <p>Women</p>

            <img alt="Image de ..." src={PrimNotYour} className=''/>
            <p>I am not your n**** </p>

            {modalIsOpen && (
                <div className="modal">
                    <h2>Modal Title</h2>
                    <p>Modal Body</p>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            )}

        </div>
    );
}

export default PrimedCarrousel;

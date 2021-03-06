import React  from 'react';
import img from "../../static/61mAKoAsBDL 1.svg";
import HeaderNav from '../../globalComponents/HeaderNav/HeaderNav';
import ToSearchPurchase from '../../globalComponents/ToSearchPurchase/ToSearchPurchase';
import { Steps } from '../../globalComponents/Steps/Steps';

const TrackPurchaseScreen = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <div className="container mx-auto px-4 mt-4 mb-6">
            <HeaderNav text={'Categorías'} />
            <div className="flex overflow-auto  mb-11 pl-4">
                <ToSearchPurchase className="mr-3" img={img} title="Protector de piel para escritorio" price="$49.900" nPurchase={'Compra #45325'} />
                
            </div>
        </div>
    )
}

export default TrackPurchaseScreen;
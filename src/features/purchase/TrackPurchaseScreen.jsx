import React  from 'react';
import img from "../../static/61mAKoAsBDL 1.svg";
import HeaderNav from '../../globalComponents/HeaderNav/HeaderNav';
import ToSearchPurchase from '../../globalComponents/ToSearchPurchase/ToSearchPurchase';
import { Steps } from '../../globalComponents/Steps/Steps';

const TrackPurchaseScreen = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <div className="container mx-auto px-6 mt-4 mb-6">
            <HeaderNav text={'Rastrear'} />
            <div className="mt-6">
                <p className="text-regular font-semibold text-colorful05 mb-3">Entrega estimada el 12 de febrero</p>
                <ToSearchPurchase  img={img} title="Protector de piel para escritorio" price="$49.900" nPurchase={'Compra #45325'} />
                <div className="flex flex-col mt-10">
                    <Steps numberSteps={5} step={1} />
                </div>
            </div>
        </div>
    )
}

export default TrackPurchaseScreen;
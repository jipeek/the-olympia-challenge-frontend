import React  from 'react';
import img from "../../static/hdbeufb.svg";
import CardProductHorizontal from '../../globalComponents/CardProductHorizontal/CardProductHorizontal';
import { Steps } from '../../globalComponents/Steps/Steps';

const TrackPurchaseScreen = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <div>
            <h1>Rastrear </h1>
            <div className="flex overflow-auto mb-11 pl-4">
                <CardProductHorizontal className="mr-3" img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                <Steps/>
                <Steps/>
                <Steps/>
            </div>
        </div>
    )
}

export default TrackPurchaseScreen;
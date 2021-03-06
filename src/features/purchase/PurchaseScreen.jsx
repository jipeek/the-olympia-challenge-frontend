import React  from 'react';
import ProductSummary from '../../globalComponents/ProductSummary/ProductSummary';
import HeaderNav from '../../globalComponents/HeaderNav/HeaderNav';
import BoxAddress from '../../globalComponents/BoxAddress/BoxAddress';
import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';
import img1 from "../../static/hdbeufb.svg";

import { Link } from 'react-router-dom';

const PurchaseScreen = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <div className="container mx-auto px-6 mt-4 mb-6">
            <HeaderNav text={'Compras'} />

            <div className="flex justify-between items-center mb-10 mt-3.5">
                <Link to="/trackpurchase" className="text-colorplaceholder font-bold text-background03">Rastrear</Link>
                <div className="ml-3 w-28">
                    <ButtonPrimary className="shadow-regular" typeButton="submit" text={'Aplicar'} />
                </div>
            </div>
            
            <div className="rounded-costum bg-background02 pt-4 pl-4 pr-2.5 pb-2.5 mb-5">
                <span className="text-base text-white mb-4.5">Resumen de productos</span>
                <ProductSummary img={img1} alt="hola" title="Protector de piel para escritorio" und="1 unidad" price="$49.900"  />
                <ProductSummary img={img1} alt="hola" title="Protector de piel para escritorio" und="1 unidad" price="$49.900"  />
            </div>

            <BoxAddress title={'Dirección de entrega'} infoTracking={'Carrera 81 J # 46-66'} />
        </div>
    )
}

export default PurchaseScreen;
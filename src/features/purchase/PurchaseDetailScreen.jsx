import React  from 'react';
import ProductSummary from '../../globalComponents/ProductSummary/ProductSummary';
import img1 from "../../static/hdbeufb.svg";

const PurchaseDetailScreen = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <div>
            <h1>Compras </h1>
            <div className="rounded-costum bg-background02 pt-4 pl-4 pr-2.5 pb-2.5">
                <span className="text-base text-white mb-4.5">Resumen de productos</span>
                <ProductSummary img={img1} alt="hola" title="Protector de piel para escritorio" und="1 unidad" price="$49.900"  />
                <ProductSummary img={img1} alt="hola" title="Protector de piel para escritorio" und="1 unidad" price="$49.900"  />
            </div>
        </div>
    )
}

export default PurchaseDetailScreen;
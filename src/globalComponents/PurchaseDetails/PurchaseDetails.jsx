import "./styles.css";
import React from 'react';

/* ------------------------
  Si el PurchaseDetails es de Descuento usar: PurchaseDetails--descount
  Si el PurchaseDetails es de Precio total usar: PurchaseDetails--total
 --------------------------*/

const PurchaseDetails = ( { className, subject, detail } ) =>{
    return (
        <div className={`PurchaseDetails flex flex-row justify-between font-medium text-white py-2.5 ${className}`} >
            <p className="PurchaseDetails__text text-normal text-colorplaceholder">{subject}</p>
            <p className="PurchaseDetails__price text-normal uppercase">{detail}</p>
        </div>
    )
}

export default PurchaseDetails;
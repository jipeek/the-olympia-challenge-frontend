import React from 'react'
import { Link } from 'react-router-dom'

import HeaderNav from '../../globalComponents/HeaderNav/HeaderNav';
import { Steps } from '../../globalComponents/Steps/Steps';
import OtherMethods from '../../globalComponents/OtherMethods/OtherMethods';
import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';

import RadioButton from '../../globalComponents/RadioButton/RadioButton';

import TypeCards from '../../globalComponents/TypeCards/TypeCards';
import Visa from "../../static/cards/Visa.svg";
import Mastercard from "../../static/cards/Mastercard.svg";
import Amex from "../../static/cards/AmericaExpress.svg";
import Pse from "../../static/cards/Pse.svg";
import Efecty from "../../static/cards/Efecty.svg";
import Paypal from "../../static/cards/Paypal.svg";
import Bitcoin from "../../static/cards/Bitcoin.svg";

const CheckoutPayment = () => {
  return (
    <div className="container mx-auto px-6 mt-4 mb-6">
      <HeaderNav text={"Pagar comprar"} className="mb-5" />
        
        <Steps numberSteps={3} step={2} />
        <p className="text-white text-2xl font-semibold border-b border-grey pt-6 pb-4">Elige un método de pago</p>
        
        <form action="" method="post">
            <div className="pb-15">

              <div className="flex flex-col justify-around pb-15">
                <div className={`OtherMethods w-full text-white flex flex-row py-4 justify-between items-center`}>
                  <div className="OtherMethods_select inline-flex">
                      <RadioButton checked={'checked'} />
                      <p className="OtherMethods__title text-white pl-2 text-medium">Paga seguro con ePayco</p>
                  </div>
                </div>

                <div className="flex flex-row justify-around">
                  <TypeCards img={Visa} />
                  <TypeCards img={Mastercard} />
                  <TypeCards img={Amex} />
                  <TypeCards img={Pse} />
                  <TypeCards img={Efecty} />
                </div>
              </div>

              <p className="text-white text-lg font-bold font-title pt-15 pb-5">Detalles del pago</p>
              <OtherMethods textPay={'Paga seguro con Paypal'} img={Paypal} />
              <OtherMethods textPay={'Paga seguro con Bitcoin'} img={Bitcoin} />
            </div>

            <ButtonPrimary className="mt-10" text={'REALIZAR PAGO'} />
        </form>
        <Link to="/checkout/address" className="text-primary" >
          Before
        </Link>
        <Link to="/checkout/confirm" className="text-primary" >
          Next
        </Link>
    </div>
  )
}

export default CheckoutPayment

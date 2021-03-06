import React from 'react'
import { Link } from 'react-router-dom'
import HeaderNav from '../../globalComponents/HeaderNav/HeaderNav';
import { Steps } from '../../globalComponents/Steps/Steps';
import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';
import CustomInput from '../../globalComponents/CustomInput/CustomInput';


const CheckoutAddress = () => {
  return (
    <>
      <div className="container mx-auto px-6 mt-4 mb-6">
        <HeaderNav text={"Pagar comprar"} className="mb-5" />
        
        <Steps numberSteps={3}  />
        <p className="text-white text-2xl font-semibold border-b border-grey pt-6 pb-4">Elige una dirección</p>

        <form className="my-5" action="" method="post">
          <label htmlFor="" className="pb-2 uppercase text-superSmall text-colorplaceholder font-bold">Tu nombre</label>
          <CustomInput className="pb-5" typeInput="text" />

          <label htmlFor="" className="pb-2 uppercase text-superSmall text-colorplaceholder font-bold">Dirección</label>
          <CustomInput className="pb-5" typeInput="address" />

          <label htmlFor="" className="pb-2 uppercase text-superSmall text-colorplaceholder font-bold">Aptartamento / Casa / otro (opcional)</label>
          <CustomInput className="pb-5" typeInput="address" />

          <label htmlFor="" className="pb-2 uppercase text-superSmall text-colorplaceholder font-bold">Ciudad</label>
          <CustomInput className="pb-5" typeInput="address" />

          <label htmlFor="" className="pb-2 uppercase text-superSmall text-colorplaceholder font-bold">Teléfono</label>
          <CustomInput typeInput="address" />

          <ButtonPrimary className="mt-10" text={'Continuar'} />

        </form>
        <Link to="/cart" className="text-primary" >
          Before
        </Link>
        <Link to="/checkout/payment" className="text-primary" >
          Next
        </Link>
      </div>
    </>
  )
}

export default CheckoutAddress

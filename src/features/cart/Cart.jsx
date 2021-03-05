import React from 'react'
import { Link } from 'react-router-dom'

import NavMenu from '../../globalComponents/NavMenu/NavMenu';
import HeaderNav from '../../globalComponents/HeaderNav/HeaderNav';
import ProductOnOrder from '../../globalComponents/ProductOnOrder/ProductOnOrder';
import CustomInput from '../../globalComponents/CustomInput/CustomInput';
import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';
import ButtonOutline from '../../globalComponents/ButtonOutline/ButtonOutline';
import PurchaseDetails from '../../globalComponents/PurchaseDetails/PurchaseDetails';

import img from "../../static/61mAKoAsBDL 1.svg";

const Cart = () => {
  return (
    <>
      <div className="pb-20">
        <NavMenu activeView={'active'}/>

        <div className="container mx-auto px-4 mt-4 mb-6">
          <HeaderNav text={'Carrito'} />

          <div className="mt-5">
            <ProductOnOrder className="mb-5" img={img} title={'Protector de piel para escritorio mas cosas'} price={'$49.900'} footer={'Envío gratis'} selected={'selected'} Delete={'Eliminar'} />
            <ProductOnOrder img={img} title={'Protector de piel para escritorio mas cosas'} price={'$49.900'} footer={'Envío gratis'} selected={'selected'} Delete={'Eliminar'} />
          </div>

          <hr className="border-colorplaceholder my-6"/>

          <form action="" method="post">
            <label htmlFor="" className="uppercase text-superSmall text-colorplaceholder font-bold">Cupon de descuento</label>
            <div className="flex">
              <CustomInput placeholder={'¿Tienes un cupón?'} typeInput="text" />
              <div className="ml-3 w-60">
                < ButtonOutline typeButton="submit" text={'Aplicar'} />
              </div>
            </div>
          </form>

          <div className="p-4">
            <span className="text-white text-lg font-bold font-title">Detalles del pago</span>
            <PurchaseDetails subject={'Subtotal productos'} detail={'$490.900'} />
            <PurchaseDetails subject={'Envío'} detail={'Gratis'} />
            <PurchaseDetails className="PurchaseDetails--descount" subject={'Descuento'} detail={'$490.900'} />
            <PurchaseDetails className="PurchaseDetails--total" subject={'Total del pedido'} detail={'$490.900'} />
          </div>

          <ButtonPrimary text={'Continuar compra'} />
          <Link to="/home" className="text-primary" >
            Before
          </Link>
          <h1 className="text-white">Cart View</h1>
          <Link to="/checkout/address" className="text-primary" >
            Next
          </Link>
        </div>
      </div>
    </>
  )
}

export default Cart

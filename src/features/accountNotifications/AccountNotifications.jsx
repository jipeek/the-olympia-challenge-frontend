import React from 'react'

import NavMenu from '../../globalComponents/NavMenu/NavMenu';
import Notification from '../../globalComponents/Notification/Notification';

// img
import Bag from "../../static/icons/Bag.svg";
import Gift from "../../static/icons/Gift.svg";
import Transports from "../../static/icons/Transports.svg";

const AccountNotifications = () => {
  return (
    <>
      <div className="pb-20">
        <div className="container mx-auto px-4 mt-4 mb-10">
          <NavMenu />
          <header className={`flex justify-center border-b border-grey pb-3 mb-10`}>
              <span className="ml-13 text-white font-bold text-lg text-center">Notificaciones</span>
          </header>

          <Notification className="mb-5" img={Transports} notificationText={'Compra exitosa'} text={'la compra #567896 ha sido enviada correctamente'} />
          <Notification className="mb-5" img={Gift} notificationText={'Recibiste puntos'} text={'Ganaste +100 puntos por la compra #567896 '} />
          <Notification className="mb-5" img={Bag} notificationText={'Compra exitosa'} text={'Ganaste +100 puntos por la compra #567896'} />

        </div>
      </div>
    </>
  )
}

export default AccountNotifications;

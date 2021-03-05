

import React from 'react';
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import i18n from '../../translations/i18n';

// Components
import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';
import TabsLinks from '../../globalComponents/TabsLinks/TabsLinks';
import LoginInput from '../../globalComponents/LoginInput/LoginInput';

// Icons
import ArrowBack from "../../static/icons/ArrowBack.svg";


import { LOGIN as LOGIN_es } from '../../locales/es';
import { LOGIN as LOGIN_en } from '../../locales/en';
const Signup = () => {
  const { t } = useTranslation();
  console.log(t, 't');
  console.log(i18n, 'i18n');
  const lang = i18n.language === "en" ? LOGIN_en : LOGIN_es;
  console.log(lang, 'lang');

  return (
    <div className="container mx-auto px-10 mt-4 mb-12">
      <button className=""><img src={ArrowBack} alt="" /></button>

      <TabsLinks className="mt-11 mb-9" tabs={[
        {
          name: 'Inicia Sesión',
          link: '/login'
        },
        {
          name: 'Crear cuenta',
          link: '/signup'
        }
      ]}
        defaultTab={1}
      />

      <form action="" method="post">
        <LoginInput className="mb-6" labelName="Nombre y apellido" typeInput="text" placeholder="Pedro Vega" nameInput={'nameUser'} />
        <LoginInput className="mb-6" labelName="Correo Electronico" typeInput="email" placeholder="user@gmail.com" nameInput={'emailUser'} />
        <LoginInput className="mb-6 LoginInput--psswd" labelName="Contraseña" typeInput="password" placeholder="Tu contraseña" nameInput={'passwordUser'} />
        <ButtonPrimary className="mb-6 shadow-regular" typeButton="submit" text={'Crea tu cuenta'} />
        <a href="#" className="text-background03 text-normal flex justify-center font-bold pb-6">¿Ya tienes cuenta? <span className="ml-1 text-center text-primary"> Inicia sesión</span></a>
        <div className="text-background03 text-normal flex justify-center"><p className="text-center">Al registrarte en Jipeek aceptas los Términos y Condiciones junto a la Política de Privacidad.</p></div>
      </form>

    </div>
  )
}

export default Signup;
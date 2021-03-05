

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


import { SIGNUP as SIGNUP_es } from '../../locales/es';
import { SIGNUP as SIGNUP_en } from '../../locales/en';
import { useHistory } from 'react-router';
const Signup = () => {
  const { t } = useTranslation();
  console.log(t, 't');
  console.log(i18n, 'i18n');
  const lang = i18n.language === "en" ? SIGNUP_en : SIGNUP_es;
  console.log(lang, 'lang');
  const history = useHistory();

  const handleSubmit = (e) => {
    console.log("🐰 handleSubmit", e);
    history.push('/login/preferences');
    return true;
  }

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

      <form action="" method="post" onSubmit={handleSubmit}>
        <LoginInput className="mb-6" labelName="Correo Electronico" typeInput="email" placeholder="user@gmail.com" />
        <LoginInput className="mb-6 LoginInput--psswd" labelName="Contraseña" typeInput="password" placeholder="Tu contraseña" />
        <LoginInput className="mb-6 LoginInput--psswd" labelName="Contraseña" typeInput="password" placeholder="Tu contraseña" />
        <ButtonPrimary className="mb-6 shadow-regular" typeButton="submit" text={lang.buttonTitle} />
        <a href="#" className="text-primary text-normal flex justify-center font-bold"><span className="text-center">¿Olvidaste tu contraseña?</span></a>
      </form>

    </div>
  )
}

export default Signup;
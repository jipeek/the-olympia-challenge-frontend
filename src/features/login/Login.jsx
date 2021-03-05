

import React from 'react';
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import  i18n  from '../../translations/i18n';

// Components
import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';
import Tabs from '../../globalComponents/Tabs/Tabs';
import LoginInput from '../../globalComponents/LoginInput/LoginInput';

// Icons
import ArrowBack from "../../static/icons/ArrowBack.svg";


import {LOGIN as LOGIN_es} from '../../locales/es';
import {LOGIN as LOGIN_en} from '../../locales/en';
const Login = () =>{
  const { t } = useTranslation();
 console.log(t, 't');
 console.log(i18n, 'i18n');
 const lang = i18n.language === "en" ? LOGIN_en  :LOGIN_es;
 console.log(lang, 'lang');
    return (
        <div className="container mx-auto px-10 mt-3 mb-11">
            <button className=""><img src={ArrowBack} alt=""/></button>

            <Tabs className="mb-9" tabs={['Inicia Sesión', 'Crear cuenta']} 
            //onChange={setActualTab} 
            />

            <form action="" method="get">
                <LoginInput className="mb-6" labelName="Correo Electronico" typeInput="email" placeholder="user@gmail.com" />
                <LoginInput className="mb-6 LoginInput--psswd" labelName="Contraseña" typeInput="password" placeholder="Tu contraseña" />
                <ButtonPrimary className="mb-6 shadow-regular" typeButton="submit" text ={lang.buttonTitle} />
                <a href="#" className="text-primary text-normal flex justify-center font-bold"><span className="text-center">¿Olvidaste tu contraseña?</span></a>
            </form>

        </div>
    )
}

export default Login;
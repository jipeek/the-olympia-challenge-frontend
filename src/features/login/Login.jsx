import React from 'react';
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';
import ButtonFacebook from '../../globalComponents/ButtonFacebook/ButtonFacebook';
import LoginInput from '../../globalComponents/LoginInput/LoginInput';
import  i18n  from '../../translations/i18n';

import {LOGIN as LOGIN_es} from '../../locales/es';
import {LOGIN as LOGIN_en} from '../../locales/en';
const Login = () =>{
  const { t } = useTranslation();
 console.log(t, 't');
 console.log(i18n, 'i18n');
 const lang = i18n.language === "en" ? LOGIN_en  :LOGIN_es;
 console.log(lang, 'lang');
    return (
    
        <div>
            <h1>Inicia sesión </h1>
            <p>Correo Electrónico</p>
            <LoginInput/>
            <p>Tú Contraseña</p>
            <LoginInput/>
            <ButtonPrimary  text ={lang.buttonTitle}/>
            <ButtonFacebook />
        </div>
    )
}

export default Login;
import React  from 'react';
import { TranslatorProvider, useTranslate } from "react-translate"

import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';
import ButtonFacebook from '../../globalComponents/ButtonFacebook/ButtonFacebook';

// sport {LOGIN as LOGIN_en} from '../../locales/es';
import LoginInput from '../../globalComponents/LoginInput/LoginInput';
import {translations} from '../../locales/es';

const Login = (lang) =>{
    //const strings =  lang === "es" ? LOGIN_es :LOGIN_en;
    //const buttonTitle = strings.buttonTitle;
    console.log('lang', lang);
    // let translations = {
    //     locale: "en",
    //     Home: {
    //       "HELLO": "Helloworld!"
    //     }
    //   };
       
      function Home() {
        let t = useTranslate("Home");
        return <h1> {t("HELLO")} </h1>
      }
    return (
        <TranslatorProvider translations={translations}>
            
        <div>
            <h1>Inicia sesión </h1>
            <p>Correo Electrónico</p>
            <LoginInput/>
            <p>Tú Contraseña</p>
            <LoginInput/>
            <ButtonPrimary  text ={"buttomTitle"}/>
            <ButtonFacebook />
            <Home />
        </div>
        </TranslatorProvider>
    )
}

export default Login;
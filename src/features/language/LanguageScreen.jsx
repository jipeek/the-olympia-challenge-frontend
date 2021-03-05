
import React, {useState} from 'react';
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import  i18n  from '../../translations/i18n';

const LanguageScreen = () =>{
    const [language, setLanguage] = useState('en');
    
    const { t } = useTranslation();
    console.log( i18n, ' i18n');
    const handleOnclick=(e)=>{
        e.preventDefault();
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
      }

    console.log(language, 'languaje');
    
    return (
        <div>
            <h1>{t("TITLE")}</h1>
            <div className="App">
                <button value='en' onClick={handleOnclick}>
                {t("EN")}
                </button>
                <button value='es' onClick={handleOnclick}>
                {t("ES")}
                </button>
         </div>
        </div>
    )
}


export default LanguageScreen;
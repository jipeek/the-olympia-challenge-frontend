import React from 'react';
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import  i18n  from '../../translations/i18n';

// Components
import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';
import ButtonOutline from '../../globalComponents/ButtonOutline/ButtonOutline';
import ImgProfile from '../../globalComponents/ImgProfile/ImgProfile';
import PreferencesCards from '../../globalComponents/PreferencesCards/PreferencesCards';

// Icons
import ArrowBack from "../../static/icons/ArrowBack.svg";
import Gamer from "../../static/preferences/Gamer.svg";
import Minimalist from "../../static/preferences/Minimalist.svg";
import Multiscreens from "../../static/preferences/Multiscreens.svg";
import OfOffice from "../../static/preferences/OfOffice.svg";
import Smalls from "../../static/preferences/Smalls.svg";
import WithLight from "../../static/preferences/WithLight.svg";


import {LOGIN as LOGIN_es} from '../../locales/es';
import {LOGIN as LOGIN_en} from '../../locales/en';
const Accountlikes = () =>{
    const { t } = useTranslation();
    console.log(t, 't');
    console.log(i18n, 'i18n');
    const lang = i18n.language === "en" ? LOGIN_en  :LOGIN_es;
    console.log(lang, 'lang');

    return (
        <>
            <div className="container mx-auto px-4 mt-3 mb-6">
                <header className="flex justify-between items-center">
                    <button className=""><img src={ArrowBack} alt=""/></button>
                    <span className="text-white font-bold text-lg">Personaliza Jipeek</span>
                    <ImgProfile className="h-12 w-12" imgProfile="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" />
                </header>
            </div>

            <div className="container mx-auto px-4 mt-3 mb-11 rounded-t-double border-t-2 border-colorplaceholder">
                <form action="" method="post">
                    <div className="flex flex-col pt-6 pb-10">
                        <span className="text-white font-title font-semibold text-2xl tracking-tight pb-2">Tus gustos</span>
                        <span className="text-colorplaceholder font-medium text-small">Elige 2 o más estilos que te gustaría tener en tu espacio de trabajo, te recomendaremos productos.</span>
                    </div>
                    <div className="flex justify-between flex-wrap">
                        <PreferencesCards className={'mb-8'} img={WithLight} text={'Con luces'} nameInput="WithLight" checked="checked"  />
                        <PreferencesCards className={'mb-8'} img={Minimalist} text={'Minimalista'} nameInput="Minimalist" />
                        <PreferencesCards className={'mb-8'} img={Multiscreens} text={'Multipantalla'} nameInput="Multiscreens" />
                        <PreferencesCards className={'mb-8'} img={Smalls} text={'Pequeños'} nameInput="Smalls" checked="checked" />
                        <PreferencesCards img={Gamer} text={'Gamer'} nameInput="Gamer"/>
                        <PreferencesCards img={OfOffice} text={'De oficina'} nameInput="OfOffice" />
                    </div>

                    <div className="flex flex-row space-between pt-12">
                        <ButtonOutline className="ButtonOutline--noButton pr-24" text ={"Saltar"} />
                        <ButtonPrimary className=" shadow-regular" text ={"Siguiente"}/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Accountlikes;
import React  from 'react';

// Components
import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';
import ButtonOutline from '../../globalComponents/ButtonOutline/ButtonOutline';
import CheckList from '../../globalComponents/CheckList/CheckList';
import ImgProfile from '../../globalComponents/ImgProfile/ImgProfile';

// Icons
import ArrowBack from "../../static/icons/ArrowBack.svg";
import DefaultProfile from "../../static/icons/DefaultProfile.svg";

const PreferencesAccount = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <>
            <div className="container mx-auto px-4 mt-3 mb-6">
                <header className="flex justify-between items-center">
                    <button className=""><img src={ArrowBack} alt=""/></button>
                    <span className="text-white font-bold text-lg">Personaliza Jipeek</span>
                    <ImgProfile className="h-12 w-12" imgProfile={DefaultProfile} />
                </header>
            </div>

            <div className="container mx-auto px-4 mt-3 mb-11 rounded-t-double border-t-2 border-colorplaceholder">
                <div className="flex flex-col items-center pt-5 pb-7">
                    <div>
                        <ImgProfile className="h-30 w-30" imgProfile={DefaultProfile} />
                    </div>
                    <span className="text-white font-title font-semibold text-2xl tracking-tight mb-1">Steve Calderon</span>
                    <span className="text-colorplaceholder font-medium text-small">Sube tu foto de perfil</span>
                </div>
                <form action="" method="post">
                    <div className="flex flex-col pb-3.5">
                        <span className="text-white font-title font-semibold text-2xl tracking-tight pb-2">Steve Calderon</span>
                        <span className="text-colorplaceholder font-medium text-small">Podrás ver productos recomendados para que crees el espacio de trabajo perfecto según tus necesidades. O puedes hacerlo luego en <em className="not-italic text-white">Tu cuenta</em>.</span>
                    </div>
                    <CheckList text={"Programador"} nameInput="developer" checked="checked" />
                    <CheckList text={"Programador"} nameInput="Designer" />
                    <CheckList text={"Programador"} nameInput="Gamer" />
                    <CheckList text={"Programador"} nameInput="Other" />

                    <div className="flex flex-row space-between pt-10">
                        <ButtonOutline className="ButtonOutline--noButton pr-24" text ={"Saltar"} />
                        <ButtonPrimary className=" shadow-regular" text ={"Siguiente"}/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PreferencesAccount;
import React  from 'react';
import  CardsAccount  from '../../globalComponents/CardsAccount/CardsAccount';
import LinkWithArrow from '../../globalComponents/LinkWithArrow/LinkWithArrow';
const AccountScreen = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <div>
            <h1>Hola Steve </h1>
            <CardsAccount text={"compras"} />
            <CardsAccount text={"puntos"} />
            <CardsAccount text={"Cupones"} />
            <CardsAccount text={"Favoritos"} />
            <p>Mi cuenta</p>
            <LinkWithArrow text={"Direcciones de envio"}/>
            <LinkWithArrow text={"Idioma"}/>
            <LinkWithArrow text={"Notificacaiones"}/>
            <LinkWithArrow text={"Moneda"}/>
            <p>Información</p>
            <LinkWithArrow text={"Terminos y condiciones"}/>
            <LinkWithArrow text={"Politicas de privacidad"}/>
            <LinkWithArrow text={"Ayuda y contacto"}/>
            <p>Siguenos </p>
            <LinkWithArrow text={"Facebook"}/>
            <LinkWithArrow text={"Instagram"}/>
        </div>
    )
}

export default AccountScreen;
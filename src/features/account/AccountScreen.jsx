import React  from 'react';
import { Link } from 'react-router-dom';
import  CardsAccount  from '../../globalComponents/CardsAccount/CardsAccount';
import LinkWithArrow from '../../globalComponents/LinkWithArrow/LinkWithArrow';
import NavMenu from '../../globalComponents/NavMenu/NavMenu';
const AccountScreen = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <div>
            <h1 className="text-white">Hola Steve </h1>
            <Link to="/profile" className="text-primary">Configuraciones de perfil</Link>
            <CardsAccount text={"compras"} />
            <CardsAccount text={"puntos"} />
            <CardsAccount text={"Cupones"} />
            <CardsAccount text={"Favoritos"} />
            <p className="text-white">Mi cuenta</p>
            <LinkWithArrow text={"Direcciones de envio"}/>
            <LinkWithArrow text={"Idioma"}/>
            <LinkWithArrow text={"Notificacaiones"}/>
            <LinkWithArrow text={"Moneda"}/>
            <p className="text-white">Información</p>
            <LinkWithArrow text={"Terminos y condiciones"}/>
            <LinkWithArrow text={"Politicas de privacidad"}/>
            <LinkWithArrow text={"Ayuda y contacto"}/>
            <p className="text-white">Siguenos </p>
            <LinkWithArrow text={"Facebook"}/>
            <LinkWithArrow text={"Instagram"}/>
            <NavMenu />
        </div>
    )
}

export default AccountScreen;
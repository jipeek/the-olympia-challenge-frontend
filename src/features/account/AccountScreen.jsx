import React  from 'react';
import { Link } from 'react-router-dom';
import  CardsAccount  from '../../globalComponents/CardsAccount/CardsAccount';
import LinkWithArrow from '../../globalComponents/LinkWithArrow/LinkWithArrow';
import NavMenu from '../../globalComponents/NavMenu/NavMenu';
import ImgProfile from '../../globalComponents/ImgProfile/ImgProfile';


const AccountScreen = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <>
            <div className="pb-20">
                <NavMenu />
                <div className="container mx-auto px-4 mt-4 mb-6">

                    <div className="flex flex-row justify-between">
                        <div className="">
                            <h1 className="text-white font-title font-bold text-3xl">Hola Steve</h1>
                            <span className="text-regular font-semibold text-colorful05">500 puntos Jipeek</span>
                        </div>

                        <ImgProfile className="w-14 h-14" imgProfile="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" />
                    </div>
                    <div className="flex pt-4 pb-8">
                        <Link to="/profile" className="bg-primary rounded-double font-semibolf text-normal text-white py-1 px-4">Tu cuenta</Link>
                    </div>
                    <div className="flex flex-wrap justify-between pb-10">
                        <CardsAccount className="CardsAccount--bag mb-5" text={"compras"} />
                        <CardsAccount className="CardsAccount--gift mb-5" text={"puntos"} />
                        <CardsAccount className="CardsAccount--coupons" text={"Cupones"} />
                        <CardsAccount className="CardsAccount--favs" text={"Favoritos"} />
                    </div>

                    <p className="tracking-wide text-colorplaceholder text-small font-bold pb-2.5">Mi cuenta</p>
                    <div className="rounded-costum bg-background02 py-1.5 mb-8">
                        <LinkWithArrow text={"Direcciones de envio"}/>
                        <LinkWithArrow text={"Idioma"}/>
                        <LinkWithArrow text={"Notificacaiones"}/>
                        <LinkWithArrow text={"Moneda"}/>
                    </div>

                    <p className="tracking-wide text-colorplaceholder text-small font-bold pb-2.5">Información</p>
                    <div className="rounded-costum bg-background02 py-1.5 mb-8">
                        <LinkWithArrow url={'https://blog.jipeek.com/terminos-y-condiciones/'} text={"Terminos y condiciones"}/>
                        <LinkWithArrow url={'https://blog.jipeek.com/politica-de-privacidad/'} text={"Politicas de privacidad"}/>
                        <LinkWithArrow url={'mailto:jipeekteam@gmail.com'} text={"Ayuda y contacto"}/>
                    </div>

                    <p className="tracking-wide text-colorplaceholder text-small font-bold pb-2.5">Siguenos</p>
                    <div className="rounded-costum bg-background02 py-1.5 mb-8">
                        <LinkWithArrow text={"Facebook"}/>
                        <LinkWithArrow text={"Instagram"}/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AccountScreen;
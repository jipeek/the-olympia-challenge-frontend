import React  from 'react';
import { Carousel } from 'react-responsive-carousel';
import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';

const OnboardingScreen = () =>{

    return (
        <div>
        <Carousel>
            <div className= "grid-rows-1" >
                <img className="logo" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="logo" />
                <img className="object-center" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="logo" />
                <h1 className="title">Platzi Store ha llegado </h1>
                <p className="descriptionBanner">Compra tus productos favoritos de Platzi desde la comodidad de tu casa </p>
            </div>
            <div style={{flexDirection:'row', width:'100%' }}>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        <ButtonPrimary  text ={"Comienza ahora"}/>
        <p>Terminos y condiciones</p>

    </div>
            
    )
}

export default OnboardingScreen;
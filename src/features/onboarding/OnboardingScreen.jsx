import React  from 'react';
//import BlueButton from '../../globalComponents/BlueButton';
//import {LOGIN as LOGIN_es} from '../../locales/es';
import { Carousel } from 'react-responsive-carousel';
//import Graphic   from '../../static/icons/graphic.png';

const OnboardingScreen = () =>{

    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;

    return (
            // <div>
            //<div className="container mx-auto px-4">
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
    //</div>
            
    )
}

export default OnboardingScreen;
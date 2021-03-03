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
      <Carousel autoPlay>
        <div>
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
            
    )
}

export default OnboardingScreen;
import React  from 'react';

import CustomButton from '../../globalComponents/CustomButton';

import {HOME_SCREEN as HOME_SCREEN_es} from '../../locales/es';

const HomeScreen= () =>{
    const strings = HOME_SCREEN_es;
    const buttonTitle = strings.buttonTitle;
    
    return (
        <div>
            <h1>HomeScreen</h1>
            <CustomButton title={buttonTitle}/>
        </div>
    )
}

export default HomeScreen;
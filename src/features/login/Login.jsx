import React  from 'react';

import CustomButton from '../../globalComponents/CustomButton';

import {LOGIN as LOGIN_es} from '../../locales/es';

const Login = () =>{
    const strings = LOGIN_es;
    const buttonTitle = strings.buttonTitle;
    
    return (
        <div>
            <h1>Login</h1>
            <CustomButton title={buttonTitle}/>
        </div>
    )
}

export default Login;
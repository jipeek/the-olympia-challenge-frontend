import React  from 'react';
import LoginInput from '../../globalComponents/LoginInput/LoginInput';

const Profile = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <div>
            <h1>Edita Perfil</h1>
            <p>Tu nombre</p>
            <LoginInput/>
            <p>Correo Electrónico</p>
            <LoginInput/>
            <p>Tú Contraseña</p>
            <LoginInput/>
            <p>A qué te dedicas</p>
            <LoginInput/>
        </div>
    )
}

export default Profile;
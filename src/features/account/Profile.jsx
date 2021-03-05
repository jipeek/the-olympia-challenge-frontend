import React  from 'react';
import { Link } from 'react-router-dom';

import LoginInput from '../../globalComponents/LoginInput/LoginInput';
import HeaderNav from '../../globalComponents/HeaderNav/HeaderNav';
import EditImgProfile from '../../globalComponents/EditImgProfile/EditImgProfile';

const Profile = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <>
            <div className="pb-20">
                <div className="container mx-auto px-4 mt-4 mb-6">
                    <HeaderNav text={'Editar perfil'} />

                    <div className="text-white">
                        <Link to="/account" className="text-primary" >
                            Before
                        </Link>
                        <div className="flex justify-center mt-12 mb-10">
                            <EditImgProfile imgProfile="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" />
                        </div>
                        <form method="post" className="px-10">
                            <LoginInput typeInput={'text'} labelName={'Tu nombre'} value={'Steve Calderón'} />
                            <LoginInput typeInput={'email'} labelName={'Correo Electrónico'} placeholder={'user@steve.com'} />
                            <LoginInput className="LoginInput--psswd" typeInput={'password'} labelName={'Contraseña'} placeholder={'Jsneuvdjh'} />
                            <LoginInput typeInput={'text'} labelName={'A qué te dedicas'} placeholder={'Diseñador'} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
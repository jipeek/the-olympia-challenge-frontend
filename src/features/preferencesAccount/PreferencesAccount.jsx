import React  from 'react';

import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary';
import ButtonOutline from '../../globalComponents/ButtonOutline/ButtonOutline';
import CheckList from '../../globalComponents/CheckList/CheckList';

const PreferencesAccount = () =>{
    //const strings = LOGIN_es;
    //const buttonTitle = strings.buttonTitle;
    
    return (
        <div>
            <CheckList text={"Programador"}/>
            <CheckList text={"Programador"}/>
            <CheckList text={"Programador"}/>
            <CheckList text={"Programador"}/>
            <ButtonOutline text ={"Saltar"} />
            <ButtonPrimary  text ={"Siguiente"}/>
        </div>
    )
}

export default PreferencesAccount;
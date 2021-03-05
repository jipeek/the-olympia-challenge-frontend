import React from 'react'
import { useHistory } from 'react-router'
import ButtonPrimary from '../../globalComponents/ButtonPrimary/ButtonPrimary'

const SignupHobbies = () => {

  const history = useHistory();

  const handleClick = () => {
    history.push('')
  }

  return (
    <div>
      <div className="text-white">asd</div>
      <ButtonPrimary text='Siguiente' onClick={handleClick} />
    </div>
  )
}

export default SignupHobbies


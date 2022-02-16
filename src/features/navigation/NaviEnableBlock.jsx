import React from 'react'
import DefaultButton from './../toolbox/buttons/DefaultButton'
import { useNavigate } from 'react-router-dom';

const NaviEnableBlock = ({mr_nv_btn,mr_nv_nv}) => {

  const navigate = useNavigate() ; 

  const handleSignIn = () => {
      navigate('/login')
  }

  const handleSignUp = () => {
    navigate('/register')
  }

  return (
    <div className='d-flex'>
      <DefaultButton
        classData={`mobile-display-none button-detailed button-detailed-transparent ${mr_nv_btn}`}
        contentData="Daxil ol"
        handleNavigation={handleSignUp}
      />
      <DefaultButton
        classData={`mobile-display-none button-detailed button-detailed-white ${mr_nv_nv}`}
        contentData="Qeydiyyat"
        handleNavigation={handleSignIn}
      />

    </div>
  )
}

export default NaviEnableBlock

import './Logo.scss';

import logo from "../../assets/Logo/BrainFlix-logo.svg"

function Logo() {

    return (

        <div className='header__logo'>

            <img className='logo' src={logo} alt='logo'/>
            
        </div>
    )
}

export default Logo;
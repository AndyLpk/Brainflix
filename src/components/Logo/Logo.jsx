import './Logo.scss';

import logo from "../../assets/Logo/BrainFlix-logo.svg"
import { Link } from 'react-router-dom';

function Logo() {

    return (

        <div className='header__logo'>

            <Link className='header__link' to="/"><img className='logo' src={logo} alt='logo'/></Link>
            
        </div>
    )
}

export default Logo;
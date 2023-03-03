import './Logo.scss';
import logo from "../../assets/Logo/BrainFlix-logo.svg"

function Logo() {

    return (
        <div className='Header__Logo'>
            <img className='Logo' src={logo} alt='logo'/>
        </div>
    )
}

export default Logo;
import './Logo.scss';
import logo from "../../assets/Logo/BrainFlix-logo.svg"

function Logo() {

    return (
        <>
            <img className='Logo' src={logo} alt='logo'/>
        </>
    )
}

export default Logo;
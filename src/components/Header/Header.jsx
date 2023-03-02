import Avatar from '../AvatarImage/AvatarImage';
import Logo from '../Logo/Logo';
import SearchBox from '../SearchBox/SearchBox';
import UploadButton from '../UploadButton/UploadButton';
import './Header.scss'


function Header () {

    return(
        <div className='Header'>
            <Logo />
            <div className='Nav'>
                <div className='Nav__Wrapper'>
                    <SearchBox />
                    <Avatar />
                </div>
                <UploadButton />
            </div>
        </div>
    )
}

export default Header;
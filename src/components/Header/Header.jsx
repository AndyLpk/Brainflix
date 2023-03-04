import Avatar from '../AvatarImage/AvatarImage';
import Logo from '../Logo/Logo';
import SearchBox from '../SearchBox/SearchBox';
import UploadButton from '../UploadButton/UploadButton';
import './Header.scss'


function Header () {

    return(
        <div className='header'>
            <Logo />

            <div className='header__nav'>

                <SearchBox  />
                <Avatar />
                <UploadButton />

            </div>
            
        </div>
    )
}

export default Header;
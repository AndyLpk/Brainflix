import './Header.scss'

import Logo from '../Logo/Logo';
import SearchBox from '../SearchBox/SearchBox';
import Avatar from '../AvatarImage/AvatarImage';
import UploadButton from '../UploadButton/UploadButton';


function Header () {

    return(
        <section className='header'>
            <Logo />

            <div className='header__nav'>

                <SearchBox  />
                <Avatar />
                <UploadButton />

            </div>
            
        </section>
    )
}

export default Header;
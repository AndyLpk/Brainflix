import avatar from '../../assets/Images/Mohan-muruge.jpg';

import './AvatarImage.scss'


function Avatar() {

    return(
        <div className='header__avatar  comment__avatar'>
            <img className='avatar' src={avatar} alt="avatar img"/>
        </div>
    )
}

export default Avatar;
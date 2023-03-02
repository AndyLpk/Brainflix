import avatar from '../../assets/Images/Mohan-muruge.jpg';
import './AvatarImage.scss'


function Avatar() {

    return(
        <>
            <img className='Avatar' src={avatar}/>
        </>
    )
}

export default Avatar;
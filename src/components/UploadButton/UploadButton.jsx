import { Link } from 'react-router-dom';
import './UploadButton.scss'

function UploadButton () {

    return(

        <div className='header__upload'>

            <Link to="/upload" className="header__button">upload</Link>
            
        </div>
    )
}

export default UploadButton;
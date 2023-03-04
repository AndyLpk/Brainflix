import VideoPlayer from '../VideoPlayer/VideoPlayer'
import './Video.scss'

import VideoDescription from '../VideoDescription/VideoDescription';


function Video (props) {


    return (
        <div className='Hero'>
            <VideoPlayer 
                Videos={props.Videos}
                selectedVideo={props.selectedVideo}
            />
            <VideoDescription 
                Videos={props.Videos}
                selectedVideo={props.selectedVideo}
            />
        </div>
    )
}

export default Video;
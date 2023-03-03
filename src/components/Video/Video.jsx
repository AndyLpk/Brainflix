import VideoPlayer from '../VideoPlayer/VideoPlayer'
import './Video.scss'

import VideoData from '../../assets/Data/video-details.json'
import { useState } from 'react';
import VideoDescription from '../VideoDescription/VideoDescription';


function Video () {

    const [Videos] = useState(VideoData);
    const [selectedVideo, setSelectedVideo] = useState(Videos[0]);

    return (
        <div className='Hero'>
            <VideoPlayer 
                Videos={Videos}
                selectedVideo={selectedVideo}
            />
            <VideoDescription 
                Videos={Videos}
                selectedVideo={selectedVideo}
            />
        </div>
    )
}

export default Video;
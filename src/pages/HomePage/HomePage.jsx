import './HomePage.scss';

import VideoData from '../../assets/Data/video-details.json'
import { useState } from 'react';

import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoList from '../../components/VideoList/VideoList';


function HomePage() {

    const [Videos] = useState(VideoData);
    const [selectedVideo, setSelectedVideo] = useState(Videos[0]);

    const handleVideoClick = (id) => {
        // console.log("click", id);
        const filteredVideos = Videos.filter(video => video.id === id);
        console.log(filteredVideos);
        setSelectedVideo(filteredVideos[0]);
    };

    return (
      <div className="homePage">
        <Header />

        <VideoPlayer Videos={Videos} selectedVideo={selectedVideo} />

        <div className="homePage__wrapper">
          <div className="homePage__content">
            <VideoDescription Videos={Videos} selectedVideo={selectedVideo} />

            <CommentSection Videos={Videos} selectedVideo={selectedVideo} />
          </div>

          <VideoList
            Videos={Videos}
            selectedVideo={selectedVideo}
            handleVideoClick={handleVideoClick}
          />
        </div>
      </div>
    );
}

export default HomePage;
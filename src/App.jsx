import './App.scss';
import CommentSection from './components/CommentSection/CommentSection';
import Header from './components/Header/Header';

import VideoList from './components/VideoList/VideoList';
import VideoDescription from './components/VideoDescription/VideoDescription'

import VideoData from './assets/Data/video-details.json'
import { useState } from 'react';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {

  const [Videos] = useState(VideoData);
  const [selectedVideo, setSelectedVideo] = useState(Videos[0]);

  const handleVideoClick = (id) => {
    // console.log("click", id);
    const filteredVideos = Videos.filter(video => video.id === id);
    console.log(filteredVideos);
    setSelectedVideo(filteredVideos[0]); 
  };

  return (
    <div className="app">
      <Header />
      
      <VideoPlayer 
        Videos={Videos}
        selectedVideo={selectedVideo}
      />

      <div className='app__wrapper'>

        <VideoDescription 
          Videos={Videos}
          selectedVideo={selectedVideo}
        />
                
        <CommentSection 
          Videos={Videos}
          selectedVideo={selectedVideo}
        />
        <VideoList 
          videos={Videos} 
          selectedVideo={selectedVideo} 
          handleVideoClick={handleVideoClick}
        />
      </div>
      
    </div>
  );
}

export default App;

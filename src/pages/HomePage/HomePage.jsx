import './HomePage.scss';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoList from '../../components/VideoList/VideoList';
import { useParams } from 'react-router-dom';

export const api = process.env.REACT_APP_API_URL;

function HomePage() {
    const [Videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});
    const {videoId} = useParams();

    useEffect(() => {
      getVideos();
    }, []);

    useEffect(() => {
      if (videoId) {
        getVideo(videoId);
      } else if (Videos.length) {
        // console.log("videoid : ", Videos[0].id);
        getVideo(Videos[0].id)
      }
    }, [videoId, Videos]);

    function getVideo(videoId) {
      axios.get(`${api}/videos/${videoId}`)
      .then((response) => {
        // console.log("res: ", response);
        setSelectedVideo(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    }

    function getVideos() {
      axios
        .get(`${api}/videos`)
        .then((response) => {
          // console.log("response from getVideos:", response.data);
          setVideos(response.data);
        })
        .catch((error) => {
          console.log("error form getVideos", error);
        });
    }

    return (
      <div className="homepage">
        <Header />

        <VideoPlayer selectedVideo={selectedVideo} />

        <div className="homepage__wrapper">
          <div className="homepage__content">
            <VideoDescription  selectedVideo={selectedVideo} />

            <CommentSection Videos={Videos} selectedVideoComments={selectedVideo.comments} /> 
          </div>

          <VideoList
            Videos={Videos}
            selectedVideo={selectedVideo}
          />
        </div>
      </div>
    );
}

export default HomePage;
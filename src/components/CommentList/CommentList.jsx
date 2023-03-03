import "./CommentList.scss";
import VideoData from "../../assets/Data/video-details.json";
import { useState } from "react";
import CommentListData from "../CommentListData/CommentListData";

function CommentList() {
  const [Videos] = useState(VideoData);
  const [selectedVideo, setSelectedVideo] = useState(Videos[0]);

  return (
    <ul id="Comment__Section" className="Comment__Section">
      {selectedVideo.comments.map((comment) => {
        {/* console.log('comments:', comment); */}

        return <CommentListData key={comment.id
        } comment={comment} />
        
      })}
    </ul>
  );
}

export default CommentList;

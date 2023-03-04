import "./VideoList.scss";

function VideoList(props) {
  return (
    <div className="Video">
      <h3 className="Video__Header">next videos</h3>

      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id)
        .map((video) => (
          <ul className="Video__List" key={video.id} onClick={() => props.handleVideoClick(video.id)}>
            <li className="Video__Items">
              <div className="Video__Wrapper">
                <div className="Video__Images">
                  <img className="Video__Img" src={video.image} />
                </div>
                

                <div className="Video__Right">
                  <p className="Video__Title">{video.title}</p>
                  <p className="Video__Channel">{video.channel}</p>
                </div>

              </div>
            </li>
          </ul>
        ))}
    </div>
  );
}

export default VideoList;

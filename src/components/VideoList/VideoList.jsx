import "./VideoList.scss";

function VideoList(props) {
  return (
    <section className="video">
      <h3 className="video__header">next videos</h3>

      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id)
        .map((video) => (
          <ul className="video__list" key={video.id} onClick={() => props.handleVideoClick(video.id)}>
            <li className="video__items">
              <div className="video__wrapper">
                <div className="video__img">
                  <img className="video__images" src={video.image} />
                </div>
                

                <div className="video__right">
                  <p className="video__title">{video.title}</p>
                  <p className="video__channel">{video.channel}</p>
                </div>

              </div>
            </li>
          </ul>
        ))}
    </section>
  );
}

export default VideoList;

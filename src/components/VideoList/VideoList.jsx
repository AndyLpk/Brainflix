import { Link } from "react-router-dom";
import "./VideoList.scss";

function VideoList(VideosItem) {

  function scrollToTop() {
    window.scrollTo({top: 0,behavior: "smooth"})
  }

  return (
    <section className="video">
      <h3 className="video__header">next videos</h3>

      {VideosItem.Videos.filter((video) => video.id !== VideosItem.selectedVideo.id).map(
        (video) => (
          <ul className="video__list" key={video.id}>
            <Link to={`/videos/${video.id}`} onClick={scrollToTop} className="video__link">
              <li className="video__items">
                <div className="video__wrapper">
                  <div className="video__img">
                    <img className="video__images" src={video.image} alt="video img" />
                  </div>

                  <div className="video__right">
                    <p className="video__title">{video.title}</p>
                    <p className="video__channel">{video.channel}</p>
                  </div>
                </div>
              </li>
            </Link>
          </ul>
        )
      )}
    </section>
  );
}

export default VideoList;

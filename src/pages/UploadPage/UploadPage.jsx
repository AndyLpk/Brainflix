import "./UploadPage.scss";
import Header from "../../components/Header/Header";
import VideoPreview from "../../assets/Images/Upload-video-preview.jpg";

function UploadPage() {
  return (
    <div className="uploadPage">
      <Header className="uploadPage__header" />

        <div className="uploadPage__hero">
            <h1 className="uploadPage__title">Upload Video</h1>

            <div className="uploadPage__content">
                <div className="uploadPage__wrapper">
                    <h3 className="uploadPage__subtitle">video thumbnail</h3>
                    <img className="uploadPage__img" src={VideoPreview} alt="video preview img" />
                </div>

                <form className="uploadPage__form">
                    <div className="uploadPage__top">
                    <label htmlFor="uploadForm" className="uploadPage__label">
                        title your video
                    </label>
                    <input
                        id="uploadForm"
                        name="uploadForm"
                        placeholder="Add a title to your video"
                        className="uploadPage__input"
                    ></input>
                    </div>

                    <div className="uploadPage__bottom">
                    <label htmlFor="uploadForm" className="uploadPage__label">
                        add a video description
                    </label>
                    <textarea
                        id="uploadForm"
                        name="uploadForm"
                        placeholder="Add a description to your video"
                        className="uploadPage__input uploadPage__input--description"
                    ></textarea>
                    </div>
                </form>
            </div>

            <div className="uploadPage__wrapper2">
                <button className="uploadPage__button uploadPage__button--publish">publish</button>
                <button className="uploadPage__button uploadPage__button--cancel">cancel</button>
            </div>

        </div>
    </div>
  );
}

export default UploadPage;

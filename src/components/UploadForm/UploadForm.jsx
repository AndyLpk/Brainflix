import "./UploadForm.scss";

import { useState } from "react";
import VideoPreview from "../../assets/Images/Upload-video-preview.jpg";

function UploadForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeTitle = (event) => {
        setTitle(event.target.vlaue);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const isFormValid = () => {
        if (title === "" || description === "") {
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            alert("Upload successful!!");
            window.location.href = '/'
        }else {
            alert("Upload unsuccessful!!  Make sure everything is FILL UP!!!");
        }
    };

  return (
    <form onSubmit={handleSubmit} className="uploadPage__hero">
      <h1 className="uploadPage__title">Upload Video</h1>

      <div className="uploadPage__content">
        <div className="uploadPage__wrapper">
          <h3 className="uploadPage__subtitle">video thumbnail</h3>
          <img
            className="uploadPage__img"
            src={VideoPreview}
            alt="video preview img"
          />
        </div>

        <div className="uploadPage__form">
          <div className="uploadPage__top">
            <label htmlFor="uploadForm" className="uploadPage__label">
              title your video
            </label>
            <input
              id="title"
              name="title"
              onChange={handleChangeTitle}
              placeholder="Add a title to your video"
              className="uploadPage__input"
            ></input>
          </div>

          <div className="uploadPage__bottom">
            <label htmlFor="uploadForm" className="uploadPage__label">
              add a video description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChangeDescription}
              placeholder="Add a description to your video"
              className="uploadPage__input uploadPage__input--description"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="uploadPage__wrapper2">
        <button
          type="submit"
          className="uploadPage__button uploadPage__button--publish"
        >
          publish
        </button>
        <button
          className="uploadPage__button uploadPage__button--cancel"
        >
          cancel
        </button>
      </div>
    </form>
  );
}

export default UploadForm;

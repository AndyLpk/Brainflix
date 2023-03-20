import "./UploadForm.scss";

import { useState } from "react";
import VideoPreview from "../../assets/Images/Upload-video-preview.jpg";
import { api } from "../../pages/HomePage/HomePage";
import  axios  from "axios";

function UploadForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const isFormValid = () => {
        if (title.trim() === "" || description.trim() === "") {
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
          axios
            .post(`${api}/videos`, {
              title: title,
              description: description,
            })
            .then(() => {
              alert("Upload successful!!");
              window.location.href = "/";
            })
            .catch((err) => {
              console.log(err);
            });

            event.target.reset();
            
        }else {    
            alert("Upload unsuccessful!!  Make sure everything is FILL UP!!!");
        }
    };

  return (
    <form onSubmit={handleSubmit} className="uploadpage__hero">
      <h1 className="uploadpage__title">Upload Video</h1>

      <div className="uploadpage__content">
        <div className="uploadpage__wrapper">
          <h3 className="uploadpage__subtitle">video thumbnail</h3>
          <img
            className="uploadpage__img"
            src={VideoPreview}
            alt="video preview img"
          />
        </div>

        <div className="uploadpage__form">
          <div className="uploadpage__top">
            <label htmlFor="uploadForm" className="uploadpage__label">
              title your video
            </label>
            <input
              id="title"
              name="title"
              onChange={handleChangeTitle}
              placeholder="Add a title to your video"
              className="uploadpage__input"
            ></input>
          </div>

          <div className="uploadpage__bottom">
            <label htmlFor="uploadForm" className="uploadpage__label">
              add a video description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChangeDescription}
              placeholder="Add a description to your video"
              className="uploadpage__input uploadpage__input--description"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="uploadpage__wrapper2">
        <button
          type="submit"
          className="uploadpage__button uploadpage__button--publish"
        >
          publish
        </button>
        <button
          className="uploadpage__button uploadpage__button--cancel"
        >
          cancel
        </button>
      </div>
    </form>
  );
}

export default UploadForm;

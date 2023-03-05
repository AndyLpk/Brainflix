import "./CommentForm.scss";

import Avatar from "../AvatarImage/AvatarImage";
import CommentButton from "../CommentButton/CommentButton";

function CommentForm() {
  return (
    <form className="comment__form">
      <div className="comment__header">
        <Avatar />
      </div>
      <div className="comment__wrapper">
        <label htmlFor="commentBox" className="comment__label">
          join the conversation
        </label>

        <div className="comment__wrapper-2">
          <textarea
            id="commentBox"
            name="commentBox"
            placeholder="Add a new comment"
            className="comment__input"
          ></textarea>

          <CommentButton />
        </div>
      </div>
    </form>
  );
}

export default CommentForm;

import "./CommentList.scss";

import CommentListData from "../CommentListData/CommentListData";

function CommentList(props) {

  return (
    <ul id="comment__section" className="comment__section">
      {props.selectedVideo.comments.map((comment) => {

        return <CommentListData key={comment.id
        } comment={comment} />
        
      })}
    </ul>
  );
}

export default CommentList;

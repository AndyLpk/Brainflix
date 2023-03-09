import "./CommentList.scss";

import CommentListData from "../CommentListData/CommentListData";

function CommentList({selectedVideoComments}) {

  return (
    <ul id="comment__section" className="comment__section">
      {selectedVideoComments && selectedVideoComments.map((comment) => {

        return <CommentListData key={comment.id
        } comment={comment} />
        
      })}
    </ul>
  );
}

export default CommentList;

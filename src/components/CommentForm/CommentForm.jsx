import Avatar from '../AvatarImage/AvatarImage';
import CommentButton from '../CommentButton/CommentButton';
import './CommentForm.scss'

function CommentForm() {

    return (
        <form className="Comment__Form">
            <div className="Comment__Header">
              <Avatar />
            </div>
            <div className="Comment__Wrapper">
          
                <label htmlFor="CommentBox" className="Comment__Label">join the conversation</label>
                <textarea id="CommentBox" name="CommentBox" placeholder="Add a new comment" className="Comment__Input"></textarea>
            
                <CommentButton />
            
             </div>
            
        </form>
    )
}

export default CommentForm;
import CommentForm from '../CommentForm/CommentForm'
import CommentList from '../CommentList/CommentList';
import './CommentSection.scss'

function CommentSection (props) {

    return (
        <div className='comment'>
            <CommentForm />
            <CommentList 
                Videos={props.Videos}
                selectedVideo={props.selectedVideo}
            />
        </div>
    )
}

export default CommentSection;
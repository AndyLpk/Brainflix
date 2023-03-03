import CommentForm from '../CommentForm/CommentForm'
import CommentList from '../CommentList/CommentList';
import './CommentSection.scss'

function CommentSection () {

    return (
        <div className='Comment'>
            <CommentForm />
            <CommentList />
        </div>
    )
}

export default CommentSection;
import './CommentSection.scss'

import CommentForm from '../CommentForm/CommentForm'
import CommentList from '../CommentList/CommentList';

function CommentSection (props) {

    return (
        <section className='comment'>
            <CommentForm />
            <CommentList 
                Videos={props.Videos}
                selectedVideo={props.selectedVideo}
            />
        </section>
    )
}

export default CommentSection;
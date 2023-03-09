import './CommentSection.scss'

import CommentForm from '../CommentForm/CommentForm'
import CommentList from '../CommentList/CommentList';

function CommentSection ({selectedVideoComments}) {

    return (
        <section className='comment'>
            <CommentForm />
            {<CommentList 
                selectedVideoComments={selectedVideoComments}
            />}
        </section>
    )
}

export default CommentSection;
import './CommentSection.scss'

import CommentForm from '../CommentForm/CommentForm'
import CommentList from '../CommentList/CommentList';

function CommentSection ({Videos, selectedVideoComments}) {

    return (
        <section className='comment'>
            <CommentForm Videos={Videos}/>
            {<CommentList 
                selectedVideoComments={selectedVideoComments}
            />}
        </section>
    )
}

export default CommentSection;
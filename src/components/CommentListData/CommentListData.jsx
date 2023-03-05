import './CommentListData.scss'

function CommentListData(props) {


    return (
        <li className='comment__item'>
            <div className='comment__header comment__header--list'>
                <div className='comment__img'></div>
            </div>
            <div className='comment__wrapper comment__wrapper--list'>
                <div className='comment__top'>
                    <p className='comment__name'>{props.comment.name}</p>
                    <p className='comment__date'>{new Date(props.comment.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                </div>
                <div className='comment__filler'>
                    <p className='comment__content'>{props.comment.comment}</p>
                </div>
            </div>

        </li>
    )
}

export default CommentListData;
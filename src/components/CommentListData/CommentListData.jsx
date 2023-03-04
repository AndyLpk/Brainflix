import './CommentListData.scss'

function CommentListData(props) {


    return (
        <li className='Comment__Item comment__Item--List'>
            <div className='Comment__Header Comment__Header--List'>
                {/* <img className='comment__img' src='' alt='img'/>  */}
                <div className='Comment__Img'></div>
            </div>
            <div className='Comment__Wrapper Comment__Wrapper--List'>
                <div className='Comment__Top'>
                    <p className='Comment__Name'>{props.comment.name}</p>
                    <p className='Comment__Date'>{new Date(props.comment.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                </div>
                <div className='Comment__Filler'>
                    <p className='Comment__Content'>{props.comment.comment}</p>
                </div>
            </div>

        </li>
    )
}

export default CommentListData;
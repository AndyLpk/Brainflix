import './VideoDescription.scss'

function VideoDescription (props) {


    return (
        <>
            <div className='Hero__Content'>
                <h1 className='Hero__Title'>{props.selectedVideo.title}</h1>

                <div className='Hero__Wrapper'>
                    <div className='Hero__Left'>
                        <p className='Hero__Channel'>By {props.selectedVideo.channel}</p>
                        <p className='Hero__Date'>{new Date(props.selectedVideo.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                    </div>

                    <div className='Hero__Right'>
                        <p className='Hero__Views'>{props.selectedVideo.views}</p>
                        <p className='Hero__Likes'>{props.selectedVideo.likes}</p>
                    </div>
                </div>

                <p className='Hero__Description'>{props.selectedVideo.description}</p>

                <h3 className='Hero__Counts'>{props.selectedVideo.comments.length} Comments</h3>
            </div>  

            
        </>
        
    )
}

export default VideoDescription;
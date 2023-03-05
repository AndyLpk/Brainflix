import './VideoDescription.scss'

function VideoDescription (props) {


    return (
        
        <section className='hero'>
            <h1 className='hero__title'>{props.selectedVideo.title}</h1>
            <div className='hero__wrapper'>
                <div className='hero__left'>
                    <p className='hero__channel'>By {props.selectedVideo.channel}</p>
                    <p className='hero__date'>{new Date(props.selectedVideo.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                </div>
                <div className='hero__right'>
                    <p className='hero__views'>{props.selectedVideo.views}</p>
                    <p className='hero__likes'>{props.selectedVideo.likes}</p>
                </div>
            </div>
            <p className='hero__description'>{props.selectedVideo.description}</p>
            <h3 className='hero__counts'>{props.selectedVideo.comments.length} Comments</h3>
            
        </section>
        
    )
}

export default VideoDescription;
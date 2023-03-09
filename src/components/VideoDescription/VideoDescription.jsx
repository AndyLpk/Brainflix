import './VideoDescription.scss'

function VideoDescription ({selectedVideo}) {


    return (
        
        <section className='hero'>
            <h1 className='hero__title'>{selectedVideo.title}</h1>
            <div className='hero__wrapper'>
                <div className='hero__left'>
                    <p className='hero__channel'>By {selectedVideo.channel}</p>
                    <p className='hero__date'>{new Date(selectedVideo.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                </div>
                <div className='hero__right'>
                    <p className='hero__views'>{selectedVideo.views}</p>
                    <p className='hero__likes'>{selectedVideo.likes}</p>
                </div>
            </div>
            <p className='hero__description'>{selectedVideo.description}</p>
            <h3 className='hero__counts'>{selectedVideo.comments && selectedVideo.comments.length} Comments</h3>
            
        </section>
        
    )
}

export default VideoDescription;
import './VideoPlayer.scss'

function VideoPlayer ({selectedVideo}) {


    return (
        <section className='player'>
            <video  className='player__video' controls poster={selectedVideo.image} src={selectedVideo.video}></video>
        </section>
    )
}

export default VideoPlayer;
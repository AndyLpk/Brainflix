import './VideoPlayer.scss'

function VideoPlayer (props) {


    return (
        <section className='player'>
            <video className='player__video' controls poster={props.selectedVideo.image} src={props.selectedVideo.video}></video>
        </section>
    )
}

export default VideoPlayer;
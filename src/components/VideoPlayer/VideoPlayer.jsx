import './VideoPlayer.scss'

function VideoPlayer (props) {


    return (
        <div className='Hero__Video'>
            <video className='Hero__Player' controls poster={props.selectedVideo.image} src={props.selectedVideo.video}></video>
        </div>
    )
}

export default VideoPlayer;
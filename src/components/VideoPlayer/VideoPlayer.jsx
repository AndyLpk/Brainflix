import './VideoPlayer.scss'

function VideoPlayer (props) {


    return (
        <>
            <video className='Hero__Video' controls poster={props.selectedVideo.image} src={props.selectedVideo.video}></video>
        </>
    )
}

export default VideoPlayer;
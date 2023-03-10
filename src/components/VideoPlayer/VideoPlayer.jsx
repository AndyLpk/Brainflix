import './VideoPlayer.scss'
export const apiKey = "b3d2fb56-2d62-4a7a-ae24-56521d130a9a";

function VideoPlayer ({selectedVideo}) {


    return (
        <section className='player'>
            <video  className='player__video' controls poster={selectedVideo.image} src={`${selectedVideo.video}?api_key=${apiKey}`}></video>
        </section>
    )
}

export default VideoPlayer;
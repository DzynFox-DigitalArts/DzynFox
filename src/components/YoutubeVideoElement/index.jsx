import './style.css'

const YoutubeVideoElement = ({videoId}) => {
    return(
        <div className="YTthumb" onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`,'_blank')}>
            <img src={`http://img.youtube.com/vi/${videoId}/0.jpg`} alt="" />
            <i className='fas fa-play'></i>
        </div>
    )
}

export default YoutubeVideoElement;
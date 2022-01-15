import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import YoutubeVideoElement from "../../components/YoutubeVideoElement";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
};

const YTVideos = () => {
    return(
        <div className="ytvideos">
            <h1>Check out our videos</h1>
            <Carousel responsive={responsive}>
                <YoutubeVideoElement videoId={"rVINXVzNvV8"} />
                <YoutubeVideoElement videoId={"MVY-XG3fRxI"} />
                <YoutubeVideoElement videoId={"MVY-XG3fRxI"} />
                <YoutubeVideoElement videoId={"MVY-XG3fRxI"} />
                <YoutubeVideoElement videoId={"MVY-XG3fRxI"} />
                <YoutubeVideoElement videoId={"MVY-XG3fRxI"} />
            </Carousel>
        </div>
    )
}

export default YTVideos
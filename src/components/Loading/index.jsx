import './style.css'
import {ClipLoader} from 'react-spinners';

const Loading = ({isFullScreen = false}) => {
    return(
        <div className={isFullScreen ? "loadingfullsreen" : "loading"}>
            <ClipLoader loading={true} size={100}/>
        </div>
    )
}

export default Loading;
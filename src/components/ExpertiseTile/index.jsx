import './style.css'

const ExpertiseTile = ({name, faIconName, imgUrl}) => {

    const styles = {
        backgroundImage: `url(${imgUrl})`
    }

    return(
        <div className="expertiseTile" style={styles}>
            <div className="expertise-icon">
                <i className={faIconName}></i>
            </div>
            <div className="expertiseDetails">
                <h2 className="expertiseName">{name}</h2>
            </div>
            <a href={`/expertise/${encodeURIComponent(name)}`} className='expertiseLink'>Learn More</a>
        </div>
    )
}

export default ExpertiseTile;
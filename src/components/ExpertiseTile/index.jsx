import './style.css'

const ExpertiseTile = ({name, faIconName, desc}) => {
    return(
        <div className="expertiseTile">
            <div className="expertise-icon">
                <i className={faIconName}></i>
            </div>
            <div className="expertiseDetails">
                <h2 className="expertiseName">{name}</h2>
                <p className="expertiseDesc">{desc}</p>
            </div>
            <a href={`/expertise/${encodeURIComponent(name)}`} className='expertiseLink'>Learn More</a>
        </div>
    )
}

export default ExpertiseTile;
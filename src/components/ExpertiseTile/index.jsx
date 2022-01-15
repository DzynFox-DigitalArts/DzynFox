import './style.css'

const ExpertiseTile = () => {
    return(
        <div className="expertiseTile">
            <div className="expertise-icon">
                <i className='fas fa-bezier-curve'></i>
            </div>
            <div className="expertiseDetails">
                <h2 className="expertiseName">Illustrations</h2>
                <p className="expertiseDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default ExpertiseTile;
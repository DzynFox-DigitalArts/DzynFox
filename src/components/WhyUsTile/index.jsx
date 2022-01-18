import './style.css'

const WhyUsTile = ({name, faIconName, desc}) => {
    return(
        <div className="whyUsTile">
            <i className={faIconName}></i>
            <div className="whyUsDetails">
                <h2 className='whyUsName'>{name}</h2>
                <p className="whyUsDesc">{desc}</p>
            </div>
        </div>
    )
}

export default WhyUsTile;
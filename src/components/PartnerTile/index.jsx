import './style.css';
const PartnerTile = ({name, contact, state, city}) => {
    return(
        <div className="partnerTile">
            <div className="partnerDetails">
                <h2 className="partnerName">{name}</h2>
                <p className="partnerDate">{state} - {city}</p>
                <div className="partnerDesc">
                    {contact}
                </div>
            </div>
        </div>
    )
}

export default PartnerTile
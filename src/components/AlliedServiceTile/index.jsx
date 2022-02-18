import './style.css'

const AlliedServiceTile = ({name, desc, faIconName}) => {
    return(
        <div className="AlliedServiceTile">
            <div className="AlliedServiceIcon"><i className={faIconName}></i></div>
            <div className="AlliedServiceDetails">
                <h2 className="AlliedServiceName">{name}</h2>
                <p className="AlliedServiceDesc">{desc}</p>
            </div>
        </div>
    )
}

export default AlliedServiceTile
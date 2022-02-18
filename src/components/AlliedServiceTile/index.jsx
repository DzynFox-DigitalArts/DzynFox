import './style.css'

const AlliedServiceTile = ({name, faIconName}) => {
    return(
        <div className="AlliedServiceTile">
            <div className="AlliedServiceIcon"><i className={faIconName}></i></div>
            <h2 className="AlliedServiceName">{name}</h2>
        </div>
    )
}

export default AlliedServiceTile
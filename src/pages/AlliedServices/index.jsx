import './style.css'
import AlliedServiceTile from "../../components/AlliedServiceTile";

const AlliedServices = () => {
    return(
        <>
            <h1 className="section-header">Allied Services</h1>
            <div className="allied-services">
                <AlliedServiceTile faIconName={"fas fa-camera"} name="Photography" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto est, architecto nam aut ad praesentium aliquam eius neque aliquid!"/>
                <AlliedServiceTile faIconName={"fas fa-video"} name="Videography" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto est, architecto nam aut ad praesentium aliquam eius neque aliquid!"/>
                <AlliedServiceTile faIconName={"fas fa-building"} name="Company Registration" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto est, architecto nam aut ad praesentium aliquam eius neque aliquid!"/>
                <AlliedServiceTile faIconName={"fas fa-trademark"} name="Trademark Registration" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto est, architecto nam aut ad praesentium aliquam eius neque aliquid!"/>
                <AlliedServiceTile faIconName={"fas fa-globe-asia"} name="Domain Registration" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto est, architecto nam aut ad praesentium aliquam eius neque aliquid!"/>
            </div>
        </>
    )
}

export default AlliedServices;
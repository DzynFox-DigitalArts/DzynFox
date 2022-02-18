import './style.css'
import AlliedServiceTile from "../../components/AlliedServiceTile";
import MarkallLogo from '../../drawables/OtherBrands/markallLogo.png';
import SpreadInIndiaLogo from '../../drawables/OtherBrands/spreadInIndiaLogo.png';

const AlliedServices = () => {
    return(
        <div className="allied-services-container">
            <h1 className="section-header">Allied Services</h1>
            <h2 className="section-subheader">Alone we can do too little. Together we can do so much.</h2>
            <p className="section-details">To serve you better we have partnered with few agencies and professional companies for services that are not our specialization, but are important elements of the business.</p>
            <p className="section-details">The purpose is to have value additions and improved services. Here are few of them</p>
            <div className="allied-services">
                <AlliedServiceTile faIconName={"fas fa-camera"} name="Photography"/>
                <AlliedServiceTile faIconName={"fas fa-video"} name="Videography"/>
                <AlliedServiceTile faIconName={"fas fa-building"} name="Company Registration"/>
                <AlliedServiceTile faIconName={"fas fa-trademark"} name="Trademark Registration"/>
                <AlliedServiceTile faIconName={"fas fa-globe-asia"} name="Domain Registration"/>
            </div>
            <div className="allied-section-other-brands">
                <h2 className="section-subheader">You might need services of our other partner companies too.</h2>
                <div className="brandImages">
                    <a href="http://www.markall.in/" target="_blank"><img src={MarkallLogo} alt="MarkAll - Marketing All Out" /></a>
                    <a href="https://spreadinindia.markall.in/" target="_blank"><img src={SpreadInIndiaLogo} alt="Spread In India" /></a>
                </div>
            </div>
        </div>
    )
}

export default AlliedServices;
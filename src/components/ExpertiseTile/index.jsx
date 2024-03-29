import './style.css'
import { useEffect, useRef} from "react";
import sanityClient from '../../sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import slugify from 'react-slugify';
import {Link, useNavigate} from 'react-router-dom';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const ExpertiseTile = ({name, faIconName, imgUrl}) => {

    const tileRef = useRef()
    const navigate = useNavigate();

    const navigateToExpertise = () => {
      navigate(`/expertise/${slugify(name)}`)
    }

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "expertise" && title == $name][0]{
            bgimage
        }`, {name}
          )
          .then((data) => {
              if(data.bgimage) {
                tileRef.current.style.backgroundImage = `url(${urlFor(data.bgimage).width(300).url()})`
              }
        })
          .catch(console.error);
    }, []);

    return(
        <div className="expertiseTile" ref={tileRef} onClick={navigateToExpertise}>
            <div className="expertise-icon">
                <i className={faIconName}></i>
            </div>
            <div className="expertiseDetails">
                <h2 className="expertiseName">{name}</h2>
            </div>
            <Link to={`/expertise/${slugify(name)}`} className='expertiseLink'>Learn More</Link>
        </div>
    )
}

export default ExpertiseTile;
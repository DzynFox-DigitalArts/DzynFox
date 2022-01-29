import './style.css'
import { useEffect, useRef} from "react";
import sanityClient from '../../sanity/client';
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const ExpertiseTile = ({name, faIconName, imgUrl}) => {

    const tileRef = useRef()

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
        <div className="expertiseTile" ref={tileRef}>
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
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState} from "react";
import sanityClient from '../../sanity/client'
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const OurPortfolio = ({name}) => {

    const [allImage, setAllImages] = useState([]);

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "expertise" && title == $name][0]{
            title,
            images
        }`, {name}
          )
          .then((data) => {
                setAllImages(data.images) 
            })
          .catch(console.error);
    }, []);

    return(
        <main className="OurPortfolio" id="portfolio">
            <header>
                <h1>Our {name} Portfolio</h1>
                <p>Take a look at what our highly capable teams ace at doing</p>
            </header>
            <div className="portfolio">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 3, 900: 4}}
                >
                    <Masonry gutter="1rem">
                        {
                            allImage && 
                            allImage.map((image, index) => (
                                <img key={index} src={urlFor(image).url()} alt="Portfolio"/>
                            )) 
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </main>
    )
}

export default OurPortfolio;
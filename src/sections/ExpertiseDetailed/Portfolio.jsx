import Logo from '../../drawables/goglobal.png'

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState} from "react";
// import sanityClient from '../../Sanity/client'
// import imageUrlBuilder from "@sanity/image-url";
// import ClipLoader from 'react-spinners/ClipLoader';

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

const OurPortfolio = ({name}) => {

    // const [allImage, setAllImages] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     sanityClient
    //       .fetch(
    //         `*[_type == "portfolios" && name == $name][0]{
    //         name,
    //         images
    //     }`, {name}
    //       )
    //       .then((data) => {
    //           setAllImages(data.images);
    //           setLoading(false);
    //         })
    //       .catch(console.error);
    // }, []);

    return(
        <main className="OurPortfolio" id="portfolio">
            <header>
                <h1 className="section-header">Our {name} Portfolio</h1>
                <p className='section-subheader'>Take a look at what our highly capable teams ace at doing</p>
            </header>
            <div className="portfolio">
                {/* <ClipLoader loading={loading} color="#ffffff" /> */}
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry gutter="3rem">
                        <img src={Logo} alt="Client" />
                        <img src={Logo} alt="Client" />
                        <img src={Logo} alt="Client" />
                        <img src={Logo} alt="Client" />
                        <img src={Logo} alt="Client" />
                        <img src={Logo} alt="Client" />
                        <img src={Logo} alt="Client" />
                        <img src={Logo} alt="Client" />
                        <img src={Logo} alt="Client" />
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </main>
    )
}

export default OurPortfolio;
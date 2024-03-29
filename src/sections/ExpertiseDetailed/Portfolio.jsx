import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState} from "react";
import sanityClient from '../../sanity/client'
import imageUrlBuilder from "@sanity/image-url";
import YoutubeEmbed from '../../components/YoutubeEmbed';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const OurPortfolio = ({name}) => {


    const [allImage, setAllImages] = useState(undefined);
    const [videoUrls, setVideoUrls] = useState(undefined);
    const [pdfs, setPdfs] = useState(undefined);

    useEffect(() => {
        setAllImages(undefined);
        setVideoUrls(undefined);
        setPdfs(undefined);
        
        sanityClient
          .fetch(
            `*[_type == "expertise" && title == $name][0]{
            title,
            images,
            videourl,
            pdfs[] -> {
                name,
                image {
                    asset -> {
                        url
                    }
                },
                pdf {
                    asset -> {
                        url
                    }
                }
            }
        }`, {name}
          )
          .then((data) => {
                setAllImages(data.images)
                setVideoUrls(data.videourl)
                setPdfs(data.pdfs)
            })
          .catch(console.error);
    }, [name]);

    return(
        <main className="OurPortfolio" id="portfolio">
            <header>
                <h1>Our {name} Portfolio</h1>
                <p>Take a look at what our highly capable teams ace at doing</p>
            </header>
            <div className="portfolio">
                {allImage &&
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 3, 900: 4}}
                >
                    
                    <Masonry gutter="1rem">
                        {
                            allImage && 
                            allImage.map((image, index) => (
                                <div key={index} className="imageDiv"><img src={urlFor(image).url()} alt="Portfolio"/></div>
                            )) 
                        }
                    </Masonry>
                </ResponsiveMasonry>}
                {videoUrls &&
                <>
                {name !== 'Animation' && <p className="portfolio-subheader">Our Video Portfolio</p>}
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 3, 900: 4}}
                >
                    
                    <Masonry gutter="1rem">
                        {
                            videoUrls && videoUrls.map((embedId, index) => (
                                <YoutubeEmbed key={index} embedId={embedId}/>
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>
                </>}
                {pdfs &&
                <>
                <p className="portfolio-subheader">Our PDF Portfolio</p>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 3, 900: 4}}
                >
                    
                    <Masonry gutter="1rem">
                        {
                            pdfs && pdfs.map((pdf, index) => (
                                <div key={index} className="pdfcontainer" onClick={() => window.open(pdf.pdf.asset.url,"_blank")}>
                                    <img src={pdf.image.asset.url} alt={pdf.name} />
                                </div>
                            ))
                        }

                    </Masonry>
                </ResponsiveMasonry>
                </>
                }
            </div>
        </main>
    )
}

export default OurPortfolio;
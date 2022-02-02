import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState} from "react";
import sanityClient from '../../sanity/client'
import imageUrlBuilder from "@sanity/image-url";
import YoutubeEmbed from '../../components/YoutubeEmbed';
import {Document, Page, pdfjs} from 'react-pdf'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const OurPortfolio = ({name}) => {

    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [allImage, setAllImages] = useState([]);
    const [videoUrls, setVideoUrls] = useState([]);
    const [pdfs, setPdfs] = useState([]);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "expertise" && title == $name][0]{
            title,
            images,
            videourl,
            pdfs[]{
                asset->{
                    url
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
    }, []);

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
                                <img key={index} src={urlFor(image).url()} alt="Portfolio"/>
                            )) 
                        }
                    </Masonry>
                </ResponsiveMasonry>}
                {videoUrls &&
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
                </ResponsiveMasonry>}
                {pdfs &&
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 3, 900: 4}}
                >
                    
                    <Masonry gutter="1rem">
                        {
                            pdfs && pdfs.map((pdf, index) => (
                                <div className="pdfcontainer" onClick={() => window.open(pdf.asset.url,"_blank")}>
                                <Document className={"pdfdocument"}
                                    file={pdf.asset.url}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    >
                                    <Page className={"pdfpage"} pageNumber={pageNumber}/>
                                </Document>
                                </div>
                            ))
                        }

                    </Masonry>
                </ResponsiveMasonry>}
            </div>
        </main>
    )
}

export default OurPortfolio;
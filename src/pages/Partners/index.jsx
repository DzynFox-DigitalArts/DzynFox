import './style.css'
import {Helmet} from 'react-helmet'
import {ClipLoader} from 'react-spinners';
import {useState, useEffect} from 'react'
import sanityClient from '../../sanity/client';
import BlockContent from "@sanity/block-content-to-react";
import QuickResponseForm from '../../components/QuickResponseForm.jsx';
import {analytics} from '../../firebase/firebase'
import {logEvent} from 'firebase/analytics'
import PartnerTile from '../../components/PartnerTile';

const Partners = () => {

    const [partners, setAllPartners] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        logEvent(analytics, 'partner_page_visit')
    }, [])

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "partners"]{
            name,
            state,
            city,
            contact
        }`
          )
          .then((data) => {
                setLoading(false)
                setAllPartners(data);
            })
          .catch(console.error);
    }, []);

    return(
        <div className='allBlogsContainer'>
            <Helmet>
                <title>Our Partners - DzynFox</title>
            </Helmet>
            <main className="allBlogs">
                <h1 className="section-header">
                    Our Partners
                </h1>
                <div className="blogs">
                    <ClipLoader loading={loading} />
                    { partners && 
                        partners.map((partner, index) => (
                            <PartnerTile 
                                key={index}
                                name={partner.name}
                                state={partner.state}
                                city={partner.city}
                                contact={
                                    <BlockContent
                                        blocks={partner.contact}
                                        projectId={sanityClient.clientConfig.projectId}
                                        dataset={sanityClient.clientConfig.dataset}
                                    />
                                }
                            />
                        ))
                    }
                </div>
            </main>
            <QuickResponseForm />
        </div>
    )
}

export default Partners
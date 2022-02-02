import './style.css'

import {useParams} from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Blog from '../../sections/BlogDetailed/Blog';

import {useEffect} from 'react';

import {analytics} from '../../firebase/firebase'
import {logEvent} from 'firebase/analytics'

const BlogDetailed = () => {
    const {slug} = useParams()

    useEffect(() => {
        logEvent(analytics, 'blog_details_page_visit')
    }, [])

    return(
        <>
        <Navbar />
        <Blog slug={slug} />
        <Footer />
        </>
    )
}

export default BlogDetailed;
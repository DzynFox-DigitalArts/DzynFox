import './style.css'

import {useParams} from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Blog from '../../sections/BlogDetailed/Blog';

const BlogDetailed = () => {
    const {slug} = useParams()

    return(
        <>
        <Navbar />
        <Blog slug={slug} />
        <Footer />
        </>
    )
}

export default BlogDetailed;
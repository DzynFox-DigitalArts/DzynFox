import './style.css'

import {useParams} from 'react-router-dom'
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
        <Blog slug={slug} />
        </>
    )
}

export default BlogDetailed;
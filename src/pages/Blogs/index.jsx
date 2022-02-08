import './style.css'
import {Helmet} from 'react-helmet'
import {ClipLoader} from 'react-spinners';
import {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar';
import sanityClient from '../../sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import BlogTile from '../../components/BlogTile';
import Footer from '../../components/Footer'
import QuickResponseForm from '../../components/QuickResponseForm.jsx';
import {analytics} from '../../firebase/firebase'
import {logEvent} from 'firebase/analytics'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Blogs = () => {

    const [allBlogs, setAllBlogs] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        logEvent(analytics, 'all_blogs_page_visit')
    }, [])

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "post"]{
            title,
            slug,
            desc,
            body,
            "author": author -> name,
            "authorTitle": author -> title,
            "authorImage": author -> image,
            mainImage,
        }`
          )
          .then((data) => {
                setLoading(false)
                setAllBlogs(data);
            })
          .catch(console.error);
    }, []);

    return(
        <div className='allBlogsContainer'>
            <Helmet>
                <title>Our Featured Blogs - DzynFox</title>
            </Helmet>
            <Navbar />
            <main className="allBlogs">
                <h1 className="section-header">
                    Our Featured Blogs
                </h1>
                <div className="blogs">
                    <ClipLoader loading={loading} />
                    { allBlogs && 
                        allBlogs.map((blog, index) => (
                            <BlogTile 
                                key={index}
                                name={blog.title}
                                authorName={blog.author}
                                authorTitle={blog.authorTitle}
                                authorImageUrl={urlFor(blog.authorImage).height(100).url()}
                                imgUrl={urlFor(blog.mainImage).height(300).url()}
                                slug={blog.slug}
                                desc={blog.desc}
                            />
                        ))
                    }
                </div>
            </main>
            <QuickResponseForm />
            <Footer />
        </div>
    )
}

export default Blogs
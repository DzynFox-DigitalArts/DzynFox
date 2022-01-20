import './style.css'

import {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar';
import sanityClient from '../../sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import BlogTile from '../../components/BlogTile';
import Footer from '../../components/Footer'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Blogs = () => {

    const [allBlogs, setAllBlogs] = useState([])

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "post"]{
            title,
            slug,
            body,
            "author": author -> name,
            "authorTitle": author -> title,
            "authorImage": author -> image,
            mainImage,
        }`
          )
          .then((data) => {
                setAllBlogs(data);
            })
          .catch(console.error);
    }, []);

    return(
        <div className='allBlogsContainer'>
            <Navbar />
            <main className="allBlogs">
                <h1 className="section-header">
                    Our Featured Blogs
                </h1>
                <div className="blogs">
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
                            />
                        ))
                    }
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Blogs
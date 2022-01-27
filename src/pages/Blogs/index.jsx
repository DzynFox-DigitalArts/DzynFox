import './style.css'
import {ClipLoader} from 'react-spinners';
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
    const [loading, setLoading] = useState(true);

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
            <Navbar />
            <main className="allBlogs">
                <h1 className="section-header">
                    Our Featured Blog
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
            <Footer />
        </div>
    )
}

export default Blogs
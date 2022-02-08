import {useEffect, useState} from 'react'
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from '../../sanity/client'
import imageUrlBuilder from "@sanity/image-url";
import { Helmet } from 'react-helmet';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Blog = ({slug}) => {
    const [postData, setPostData] = useState()

    useEffect(() => {
        sanityClient
          .fetch(
            `*[slug.current == $slug]{
              title,
              slug,
              mainImage{
                asset->{
                  _id,
                  url
                 }
               },
             body,
            "authorName": author->name,
            "authorTitle": author->title,
            "authorImage": author->image,
            publishedAt,
           }`,
            { slug }
          )
          .then((data) => setPostData(data[0]))
          .catch(console.error);
      }, [slug]);

    return(
        <div className="blogContainerMain">
            {postData && 
            <>
            <Helmet>
            <title>{postData.title} - DzynFox</title>
            </Helmet>
            <div className='blog'>
            <header>
                <h1 className='blogName'>{postData.title}</h1>
                {console.log(postData.publishedAt)}
                <p>{postData.publishedAt}</p>
                <div className="authorDetails">
                    <img src={urlFor(postData.authorImage).url()} alt="" className="authorImage" />
                    <p className="authorName">{postData.authorName} <br /> {postData.authorTitle}</p>
                </div>
            </header>
            <img src={urlFor(postData.mainImage).url()} alt="" className="mainImg" />
            <div className="blog_blog">
            {postData && 
                <BlockContent
                blocks={postData.body}
                projectId={sanityClient.clientConfig.projectId}
                dataset={sanityClient.clientConfig.dataset}
            />
            }
            </div>
            </div>
            </>
            }
        </div>
    )
}

export default Blog;
import './style.css';
import LinesEllipsis from 'react-lines-ellipsis'


const BlogTile = ({imgUrl, name, authorName, authorTitle, authorImageUrl, slug, desc}) => {

    const redirectToDetails = () => {
        window.open(`/blog/${slug.current}`)
    }

    return(
        <div className="blogTile" onClick={redirectToDetails}>
            <img src={imgUrl} alt={name} />
            <div className="blogDetails">
                <h2 className="blogName">{name}</h2>
                <p className="blogDesc">
                    <LinesEllipsis 
                        text={desc}
                        maxLine='2'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
                <div className="authorDetails">
                    <img src={authorImageUrl} alt="" className="authorImage" />
                    <p className="authorName">{authorName} <br /> {authorTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogTile
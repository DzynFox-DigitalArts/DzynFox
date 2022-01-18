import './style.css'

const TeamMember = ({imgUrl, name, designation, quote, gh, fb, li, ig}) => {
    return(
        <div className="TeamMember">
            <img src={imgUrl} alt={name} />
            <div className="memberDetails">
                <h1 className="name">{name}</h1>
                <p className="des">{designation}</p>
                <p className="quote">{quote}</p>
                <div className="socialLinks">
                    {gh && <a href={gh} className='social-link' target={"_blank"} rel='nofollow'><i className="fab fa-github"></i></a>}
                    {fb && <a href={fb} className='social-link' target={"_blank"} rel='nofollow'><i className="fab fa-facebook-f"></i></a>}
                    {li && <a href={li} className='social-link' target={"_blank"} rel='nofollow'><i className="fab fa-linkedin"></i></a>}
                    {ig && <a href={ig} className='social-link' target={"_blank"} rel='nofollow'><i className="fab fa-instagram"></i></a>}
                </div>
            </div>
        </div>
    )
}

export default TeamMember
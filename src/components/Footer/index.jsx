import './style.css'

const Footer = () => {
    return(
        <section className="Footer">
            <div className="FooterContent">
                <div className="companyDetails">
                    <h1 className="section-header">DZYN<span className='accentText'>FOX</span></h1>
                    <p>A Brand of Markall - Marketing All Out</p>
                    <p>COPYRIGHT &copy; DzynFox Visual Communications LLP</p>
                    <p className='attribution'>Images designed with the help of <a href="https://www.freepik.com" target="_blank" rel="nofollow noreferrer">Freepik</a></p>
                </div>
                <div className="address">
                    <h2>Our Address</h2>
                    <p>
                        B101-Amrapali <br />
                        Sector-3, Vaishali <br />
                        Ghaziabad - 201010
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer
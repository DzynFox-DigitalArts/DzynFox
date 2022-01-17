const ContactForm = () => {
    return(
        <section className="ContactForm">
            <h1 className="section-header">Contact Us</h1>
            <div className="ContactFormContent">
                <div className="ContactInfo">
                    <h2>Contact Information</h2>
                    <p>Fill up this form and our team will get back to you within one working day. See You!</p>
                    <div className="contactInfoGrpContainer">
                        <div className="contactinfoGrp">
                            <i className="fas fa-phone-alt"></i>
                            <a href="tel:+919354566860">+91 93545 66860</a>
                        </div>
                        <div className="contactinfoGrp">
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:dzynfox@gmail.com">dzynfox@gmail.com</a>
                        </div>
                        {/* <div className="contactinfoGrp">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>B101-Amrapali
                            Sector-3, Vaishali
                            Ghaziabad - 201010
                            </p>
                        </div> */}
                    </div>
                    <div className="socials">
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                <form className="ContactForm-Form">
                    <div className="inputGroup">
                        <input type="text" name="fname" />
                        <label htmlFor="fname" className="inputLbl">First Name</label>
                    </div>
                    <div className="inputGroup">
                        <input type="text" name="lname" />
                        <label htmlFor="lname" className="inputLbl">Last Name</label>
                    </div>
                    <div className="inputGroup">
                        <input type="email" name="email" />
                        <label htmlFor="email" className="inputLbl">E-Mail</label>
                    </div>
                    <div className="inputGroup">
                        <input type="tel" name="phone" />
                        <label htmlFor="phone" className="inputLbl">Phone</label>
                    </div>
                    <div className="inputGroup msgBoxInputGrp">
                        <textarea name="msg" className="msgBox" cols="30" rows="10"></textarea>
                        <label htmlFor="msg" className="inputLbl">Message</label>
                    </div>
                    <button type="submit" className="sendBtn">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm
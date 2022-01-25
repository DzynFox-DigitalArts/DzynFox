import { useState } from "react"

const ContactForm = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState()

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      };

    const sendMsg = e => {
        e.preventDefault();
        const messageContent = `Name: ${fname} ${lname} \n Phone: ${phone} \n Email: ${email} \n Message: ${msg}`
        fetch("https://dzynfox.netlify.app/.netlify/functions/notify", {method: 'POST', headers , body: {email: 'HELLO TEST'}})
        .then(response => {console.log(response.json)})
        .catch(err => console.log("ERROR"))
    }

    return(
        <section className="ContactForm" id="contact-us">
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
                        <input type="text" name="fname" value={fname} onChange={e => setFname(e.target.value)}/>
                        <label htmlFor="fname" className="inputLbl">First Name</label>
                    </div>
                    <div className="inputGroup">
                        <input type="text" name="lname" value={lname} onChange={e => setLname(e.target.value)} />
                        <label htmlFor="lname" className="inputLbl">Last Name</label>
                    </div>
                    <div className="inputGroup">
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor="email" className="inputLbl">E-Mail</label>
                    </div>
                    <div className="inputGroup">
                        <input type="tel" name="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
                        <label htmlFor="phone" className="inputLbl">Phone</label>
                    </div>
                    <div className="inputGroup msgBoxInputGrp">
                        <textarea name="msg" className="msgBox" cols="30" rows="10" value={msg} onChange={e => setMsg(e.target.value)}></textarea>
                        <label htmlFor="msg" className="inputLbl">Message</label>
                    </div>
                    <button type="submit" className="sendBtn" onClick={e => sendMsg(e)}>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm
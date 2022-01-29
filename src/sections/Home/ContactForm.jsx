import { useState } from "react"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const sendMsg = e => {
        e.preventDefault();
        const messageContent = `Name: ${fname} ${lname} \n Phone: ${phone} \n Email: ${email} \n Message: ${msg}`
        const postData = {
            name: fname,
            message: messageContent
        }

        if(fname === '' || lname === '' || email === '' || phone === '' || msg === '') {
            toast.error('Please fill up all the fields', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (!validateEmail(email)) {
            toast.error('Please enter a vailid email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.promise(fetch("https://dzynfox.com/.netlify/functions/notify", 
            {method: 'POST', body: JSON.stringify(postData)}), {
            pending: 'Sending Message',
            success: 'Message sent',
            error: 'An error occured while sending the message! Please try again later or contact us directly'
            })
        }
    }

    return(
        <section className="ContactForm" id="contact-us">
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                            <a href="mailto:sales@dzynfox.com">sales@dzynfox.com</a>
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
                        <a href="https://www.facebook.com/DzynFox-DigitalArts-105250575387678" target={"_blank"} rel="nofollow noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/dzynfox/" target={"_blank"} rel="nofollow noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/dzynfox/" target={"_blank"} rel="nofollow noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com/channel/UC6ZfkNO_QGy2RvPckmQ_tdw" target={"_blank"} rel="nofollow noreferrer"><i className="fab fa-youtube"></i></a>
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
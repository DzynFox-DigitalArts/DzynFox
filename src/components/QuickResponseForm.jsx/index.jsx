import './style.css'
import { useState } from "react"

const QuickResponseForm = () => {

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
        console.log("Send Message")
    }

    return (
        <div className="quickResponse">
            <div className="quickResponseForm">
                <div className="ContactFormContent">
                    <div className="ContactInfo">
                        <h2>Contact Information</h2>
                        <p>Fill up this form and our team will get back to you within one working day. See You!</p>
                    </div>
                    <form className="ContactForm-Form">
                        <div className="inputGroup fnameInputGrp">
                            <input type="text" name="fname" value={fname} onChange={e => setFname(e.target.value)}/>
                            <label htmlFor="fname" className="inputLbl">Name</label>
                        </div>
                        <div className="inputGroup">
                            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <label htmlFor="email" className="inputLbl">E-Mail</label>
                        </div>
                        <div className="inputGroup">
                            <input type="tel" name="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
                            <label htmlFor="phone" className="inputLbl">Phone</label>
                        </div>
                        <button type="submit" className="sendBtn" onClick={e => sendMsg(e)}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuickResponseForm;
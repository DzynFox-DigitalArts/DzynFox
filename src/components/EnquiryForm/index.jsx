import './style.css'
import { useState } from "react"
import {ToastContainer, toast} from 'react-toastify'
import {collection, addDoc} from 'firebase/firestore/lite'
import {db} from '../../firebase/firebase'
import Select from 'react-select'

const EnquiryForm = () => {

    const timeFrameOptions = [
        {value: 'Immediately', label: 'Immediately'},
        {value: 'After a month', label: 'After a month'},
        {value: 'Sometime later', label: 'Sometime later'},
    ]

    const postPerMonths = [
        {value: 30, label: '20-30'},
        {value: 50, label: '30-50'},
        {value: 100, label: '50-100'},
        {value: '100+', label: 'Over 100'}
    ]

    const [fname, setFname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [industry, setIndustry] = useState('')
    const [timeFrame, setTimeFrame] = useState('')
    const [postPerMonth, setPostPerMonth] = useState('')
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
        const messageContent = `Name: ${fname} \n Phone: ${phone} \n Email: ${email} \n Company: ${company} \n Industry: ${industry} \n TimeFrame: ${timeFrame} \n PostPerMonth: ${postPerMonth} \n Message: ${msg} \n Service: Social Media Marketing`
        const postData = {
            name: fname,
            message: messageContent
        }

        if(fname === '' || email === '' || phone === '') {
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
            }).then(() => {
                setFname('')
                setEmail('')
                setPhone('')
                setCompany('')
                setIndustry('')
            })

            toast.promise(
                addDoc(collection(db,'queries'), {
                    name: fname,
                    phone: phone,
                    email: email,
                    company,
                    industry,
                    postPerMonth,
                    timeFrame,
                    message: msg,
                    service: 'Social Media Marketing'
                }), 
            {
            pending: 'Adding details to support queue',
            success: 'Added details to support queue',
            error: 'An error occured while adding details to support queue Please try again later or contact us directly'
            }).then(() => {
                setFname('')
                setEmail('')
                setPhone('')
                setCompany('')
                setIndustry('')
            })

        }
    }

    return (
        <div className="quickResponse">
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
            <div className="quickResponseForm enquiryForm" id='enquiryForm'>
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
                        </div>
                        <div className="socials">
                            <a href="https://www.facebook.com/DzynFox-Visual-Communications-105250575387678" target={"_blank"} rel="nofollow noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/dzynfox/" target={"_blank"} rel="nofollow noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/dzynfox/" target={"_blank"} rel="nofollow noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.youtube.com/channel/UC6ZfkNO_QGy2RvPckmQ_tdw" target={"_blank"} rel="nofollow noreferrer"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <form className="ContactForm-Form">
                        <div className="inputGroup fnameInputGrp">
                            <input type="text" name="fname" value={fname} onChange={e => setFname(e.target.value)}/>
                            <label htmlFor="fname" className="inputLbl">Name*</label>
                        </div>
                        <div className="inputGroup">
                            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <label htmlFor="email" className="inputLbl">E-Mail*</label>
                        </div>
                        <div className="inputGroup">
                            <input type="tel" name="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
                            <label htmlFor="phone" className="inputLbl">Phone*</label>
                        </div>
                        <div className="inputGroup">
                            <input type="tel" name="phone" value={company} onChange={e => setCompany(e.target.value)}/>
                            <label htmlFor="phone" className="inputLbl">Company Name</label>
                        </div>
                        <div className="inputGroup">
                            <input type="tel" name="phone" value={industry} onChange={e => setIndustry(e.target.value)}/>
                            <label htmlFor="phone" className="inputLbl">Industry Type</label>
                        </div>
                        <div className="inputGroup">
                            <Select 
                                options={timeFrameOptions}
                                defaultValue={{value: "Select", label: "When do you need us?"}}
                                onChange={value => setTimeFrame(value.value)}
                            />
                        </div>
                        <div className="inputGroup">
                            <Select 
                                options={postPerMonths}
                                defaultValue={{value: "Select", label: "Posts per month?"}}
                                onChange={value => setPostPerMonth(value.value)}
                            />
                        </div>
                        <div className="inputGroup msgBoxInputGrp">
                        <textarea name="msg" className="msgBox" cols="30" rows="3" value={msg} onChange={e => setMsg(e.target.value)}></textarea>
                        <label htmlFor="msg" className="inputLbl">Anything that you like to mention:</label>
                        </div>
                        <button type="submit" className="sendBtn" onClick={e => sendMsg(e)}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EnquiryForm;
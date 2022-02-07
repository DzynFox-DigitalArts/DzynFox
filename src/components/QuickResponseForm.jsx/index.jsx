import './style.css'
import { useState } from "react"
import {ToastContainer, toast} from 'react-toastify'
import {collection, addDoc} from 'firebase/firestore/lite'
import {db} from '../../firebase/firebase'

const QuickResponseForm = () => {

    const [fname, setFname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const sendMsg = e => {
        e.preventDefault();
        const messageContent = `Name: ${fname} \n Phone: ${phone} \n Email: ${email} \n Message: Quick Respone`
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
            })

            toast.promise(
                addDoc(collection(db,'queries'), {
                    name: fname,
                    phone: phone,
                    email: email,
                    message: 'Message From Quick Response Form'
                }), 
            {
            pending: 'Adding details to support queue',
            success: 'Added details to support queue',
            error: 'An error occured while adding details to support queue Please try again later or contact us directly'
            }).then(() => {
                setFname('')
                setEmail('')
                setPhone('')
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
            <div className="quickResponseForm">
                <h1 className="section-header">Contact Us</h1>
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
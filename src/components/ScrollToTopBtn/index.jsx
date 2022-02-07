import {useState} from 'react'
import { useMediaQuery } from 'react-responsive';
import './style.css'

const ScrollToTopBtn = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 780px)"
    })
    
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop
        if(scrolled > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', handleScroll)

    return(
        <button style={{display: (visible && isMobile) ? 'inline' : 'none'}} className="scrollTopBtn" onClick={ScrollToTop}>
            <i className="fas fa-arrow-up"></i>
        </button>
    )
}

export default ScrollToTopBtn;
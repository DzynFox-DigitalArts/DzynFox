import './style.css'
import logo from '../../drawables/logo.png'
import {useMediaQuery} from 'react-responsive'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 780px)'
    })

    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-list .nav-list-item');
        console.log(mobileNavLinks)
    }, [])

    return(
        <header>
            <nav>
                <Link to="/"><img src={logo} alt="DZYNFOX" className="logo" /></Link>
                {isDesktopOrLaptop ? 
                <ul className="nav-list">
                    <li className="nav-list-item"><Link to="/">Home</Link></li>
                    <li className="nav-list-item"><HashLink to="/#expertise">Services</HashLink></li>
                    <li className="nav-list-item"><Link to="/allied-services">Allied Services</Link></li>
                    <li className="nav-list-item"><Link to="/blog">Our Blog</Link></li>
                    <li className="nav-list-item"><Link to="/about-us">About Us</Link></li>
                    <li className="nav-list-item"><Link to="/partners">Our Partners</Link></li>
                    <li className="nav-list-item"><HashLink to="/#contact">Contact Us</HashLink></li>
                </ul>
                :
                <button className='MobileNavToggle' onClick={() =>  setIsNavOpen(!isNavOpen)}>
                    {isNavOpen ? 
                        <i className="fas fa-times"></i>
                        :
                        <i className="fas fa-bars"></i>    
                    }
                </button>    
                }
            </nav>
            {
                !isDesktopOrLaptop && isNavOpen && 
                <div className='mobile-nav'>
                <ul className="nav-list mobile-nav-list" onClick={() => setIsNavOpen(false)}>
                    <li className="nav-list-item"><Link to="/">Home</Link></li>
                    <li className="nav-list-item"><HashLink to="/#expertise">Services</HashLink></li>
                    <li className="nav-list-item"><Link to="/allied-services">Allied Services</Link></li>
                    <li className="nav-list-item"><Link to="/blog">Our Blog</Link></li>
                    <li className="nav-list-item"><Link to="/about-us">About Us</Link></li>
                    <li className="nav-list-item"><Link to="/partners">Our Partners</Link></li>
                    <li className="nav-list-item"><HashLink to="/#contact">Contact Us</HashLink></li>
                </ul>
                <button className='MobileNavToggle' onClick={() =>  setIsNavOpen(!isNavOpen)}>
                    {isNavOpen ? 
                        <i className="fas fa-times"></i>
                        :
                        <i className="fas fa-bars"></i>    
                    }
                </button> 
                </div>
            }
        </header>
    )
}

export default Navbar
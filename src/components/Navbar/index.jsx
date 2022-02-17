import './style.css'
import logo from '../../drawables/logo.png'
import {useMediaQuery} from 'react-responsive'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 780px)'
    })

    const [isNavOpen, setIsNavOpen] = useState(false);

    return(
        <header>
            <nav>
                <a href="/"><img src={logo} alt="DZYNFOX" className="logo" /></a>
                {isDesktopOrLaptop ? 
                <ul className="nav-list">
                    <li className="nav-list-item"><Link to="/">Home</Link></li>
                    {/* <li className="nav-list-item"><Link to="/expertise">Our Expertise</Link></li> */}
                    <li className="nav-list-item"><Link to="/blog">Our Blog</Link></li>
                    <li className="nav-list-item"><Link to="/about-us">About Us</Link></li>
                    <li className="nav-list-item"><a href="/#contact-us">Contact Us</a></li>
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
                <ul className="nav-list mobile-nav-list">
                    <li className="nav-list-item"><Link to="/">Home</Link></li>
                    {/* <li className="nav-list-item"><Link to="/expertise">Our Expertise</Link></li> */}
                    <li className="nav-list-item"><Link to="/blog">Our Blog</Link></li>
                    <li className="nav-list-item"><Link to="/about-us">About Us</Link></li>
                    <li className="nav-list-item"><a href="/#contact-us">Contact Us</a></li>
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
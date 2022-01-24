import './style.css'
import logo from '../../drawables/logo.png'

const Navbar = () => {
    return(
        <header>
            <nav>
                <a href="/"><img src={logo} alt="DZYNFOX" className="logo" /></a>
                <ul className="nav-list">
                    <li className="nav-list-item"><a href="/">Home</a></li>
                    <li className="nav-list-item"><a href="/expertise">Our Expertise</a></li>
                    <li className="nav-list-item"><a href="/blog">Our Blog</a></li>
                    <li className="nav-list-item"><a href="/about-us">About Us</a></li>
                    <li className="nav-list-item"><a href="/#contact-us">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
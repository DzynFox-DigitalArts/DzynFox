import './style.css'
import logo from '../../drawables/logo.jpg'

const Navbar = () => {
    return(
        <header>
            <nav>
                <a href="/"><img src={logo} alt="DZYNFOX" className="logo" /></a>
                <ul className="nav-list">
                    <li className="nav-list-item"><a href="/">Home</a></li>
                    <li className="nav-list-item"><a href="">Our Expertise</a></li>
                    <li className="nav-list-item"><a href="">Our Blog</a></li>
                    <li className="nav-list-item"><a href="/about-us">About Us</a></li>
                    <li className="nav-list-item"><a href="">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
import './style.css'
import logo from '../../drawables/logo.jpg'

const Navbar = () => {
    return(
        <header>
            <nav>
                <a href="/"><img src={logo} alt="DZYNFOX" class="logo" /></a>
                <ul class="nav-list">
                    <li class="nav-list-item"><a href="">Home</a></li>
                    <li class="nav-list-item"><a href="">Our Expertise</a></li>
                    <li class="nav-list-item"><a href="">Our Blog</a></li>
                    <li class="nav-list-item"><a href="">About Us</a></li>
                    <li class="nav-list-item"><a href="">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
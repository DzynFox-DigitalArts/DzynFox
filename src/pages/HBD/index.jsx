import Confetti from 'react-confetti'
import './style.css'
import Flags from '../../drawables/separated/Flags.png'
import Cake from '../../drawables/separated/Cake.png'
import Balloons from '../../drawables/separated/balloons.mp4'
import Logo from '../../drawables/logo.png';
import {Helmet} from 'react-helmet'

const HBD = () => {
    return(
        <div className="hbd">
            <Helmet>
                <title>Happy Birthday!</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"></meta>
            </Helmet>
            <Confetti 
                height={window.innerHeight}
                width={window.innerWidth}
            />
            <div className="hbdContent">
                <img src={Flags} alt="Birthday Flags" className='flags'/>
                <video autoPlay loop muted className='balloons leftballoons'>
                <source src={Balloons} />
                </video>
                <video autoPlay loop muted className='balloons rightballoons'>
                <source src={Balloons} />
                </video>
                <img src={Cake} alt="Birthday Cake" className='cake' />
                    <h1 className="text">
                        The more you praise and celebrate your life <br />
                        the more there is in life to celebrate.
                    </h1>
                <div className="advertisement">
                    <a href="/"><img src={Logo} className="adlogo" /></a>
                    <h2>Design Agency</h2>
                </div>
            </div>
        </div>
    )
}

export default HBD
import { useState, useRef, useEffect } from 'react'
import Confetti from 'react-confetti'
import './style.css'
import Flags from '../../drawables/separated/Flags.png'
import Cake from '../../drawables/separated/Cake.png'
import Balloons from '../../drawables/separated/balloons.mp4'
import { gsap } from 'gsap'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom'


const wishes = [
`The more you praise and celebrate your life,
the more there is in life to celebrate.`,

`A birthday is a reminder to celebrate the life
as well as to update the life.`,

`Celebrations add colours in our life
And birthday is one of them.
We wish you unlimited happy days
And celebrate hundreds of birthdays.`,

`We promise that the more birthday candles you blow,
the more we will be here for you to celebrate every special event in your life.`,

`Today is the oldest you've ever been,
and the youngest you'll ever be again.`,

`Celebrate your birthday today.
Celebrate being happy every day.`,
]

const HBD = () => {

    const coverRef = useRef(null)
    const selector = gsap.utils.selector(coverRef);
    const tl = useRef();
    const [index, setIndex] = useState(0);

    const showNextMsg = () => {
        setIndex((index + 1) % wishes.length)
    }

    useEffect(() => {
        tl.current = gsap.timeline({defaults: {ease: 'power1.out'}})
        .to(selector('.fast'), {
            y: '-180vh',
            duration: 5,
            repeat: -1
        })
    }, [])

    useEffect(() => {
        tl.current = gsap.timeline({defaults: {ease: 'power1.out'}})
        .to(selector('.slow'), {
            y: '-180vh',
            duration: 4,
            repeat: -1
        })
    })

    useEffect(() => {
        tl.current = gsap.timeline({defaults: {ease: 'power1.out'}})
        .to(selector('.text'), {
            y: '0%',
            duration: 1,
            delay: 0.5
        })
    }, [])

    return(
        <div className="hbd" ref={coverRef}>
            <Helmet>
                <title>Happy Birthday!</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"></meta>
            </Helmet>
            <Confetti 
                height={window.innerHeight}
                width={window.innerWidth}
            />
            <video autoPlay loop muted className='balloons leftballoons'>
                <source src={Balloons} />
            </video>
            <video autoPlay loop muted className='balloons rightballoons'>
                <source src={Balloons} />
            </video>
            <div className="wish-container">
                <img src={Flags} alt="Flags" className='hbdBgImageFlag'/>
                <img src={Cake} alt="Flags" className='hbdBgImageCake'/>
                <div className="intro-text">
                    <h1 className="hide">
                        <span className="text"><pre>{wishes[index]}</pre></span>
                    </h1>
                </div>
                {/* <div className="next-wish">
                    <button onClick={showNextMsg}>More Wishes</button>
                </div> */}
                <div className="advertisement">
                    <h2>For all of your designing needs please choose</h2>
                    <Link to={'/'}><h1 className="section-header">DZYN<span className='accentText'>FOX</span></h1></Link>
                </div>
            </div>
        </div>
    )
}

const wishOne = () => {
    return (
        null
    )
}

export default HBD
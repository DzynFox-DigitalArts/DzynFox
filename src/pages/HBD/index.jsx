import { useState, useRef, useEffect } from 'react'
import Confetti from 'react-confetti'
import './style.css'
import Flags from '../../drawables/separated/Flags.png'
import Cake from '../../drawables/separated/Cake.png'
import Balloons from '../../drawables/separated/balloons.mp4'
import Logo from '../../drawables/logo.png';
import { gsap } from 'gsap'
import {Helmet} from 'react-helmet'


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
            <div className="hbdContent">
                <img src={Flags} alt="Birthday Flags" className='flags'/>
                <video autoPlay loop muted className='balloons leftballoons'>
                <source src={Balloons} />
                </video>
                <video autoPlay loop muted className='balloons rightballoons'>
                <source src={Balloons} />
                </video>
                <img src={Cake} alt="Birthday Cake" className='cake' />
                <div className="intro-text">
                    <h1 className="hide">
                        <span className='text'>The more you praise and celebrate your life <br />
                        the more there is in life to celebrate.</span>
                    </h1>
                </div>
                <div className="advertisement">
                    <a href="/"><img src={Logo} className="adlogo" /></a>
                    <h2>Design Agency</h2>
                </div>
            </div>
        </div>
    )
}

export default HBD
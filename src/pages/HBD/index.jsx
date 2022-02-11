import { useState, useRef, useEffect } from 'react'
import Confetti from 'react-confetti'
import './style.css'
import Flags from '../../drawables/separated/Flags.png'
import fast from '../../drawables/separated/fast.png'
import slow from '../../drawables/separated/slow.png'
import Cake from '../../drawables/separated/Cake.png'
import { gsap } from 'gsap'


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
            y: '-200%',
            duration: 3,
            delay: 1,
        })
    }, [])

    useEffect(() => {
        tl.current = gsap.timeline({defaults: {ease: 'power1.out'}})
        .to(selector('.slow'), {
            y: '-200%',
            duration: 4,
            delay: 1,
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
            <img src={Flags} alt="Flags" className='hbdBgImageFlag'/>
            <img src={fast} alt="Flags" className='hbdBgImage fast'/>
            <img src={slow} alt="Flags" className='hbdBgImage slow'/>
            <Confetti 
                height={window.innerHeight}
                width={window.innerWidth}
            />
            <div className="wish-container">
                <img src={Cake} alt="Flags" className='hbdBgImageCake'/>
                <div className="intro-text">
                    <h1 className="hide">
                        <span className="text"><pre>{wishes[index]}</pre></span>
                    </h1>
                </div>
            <div className="next-wish">
                <p>We have more wishes for you</p>
                <button onClick={showNextMsg}>See Next</button>
            </div>
            </div>
        </div>
    )
}

export default HBD
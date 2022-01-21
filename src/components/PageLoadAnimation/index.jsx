import './style.css'
import {useEffect, useRef, useState} from 'react'
import { gsap } from 'gsap'

const PageLoadAnimation = () => {

    const coverRef = useRef(null);
    const selector = gsap.utils.selector(coverRef);
    const tl = useRef();

    const [animationFinished, setAnimationFinished] = useState(false)
    const [imageLoader, setimageLoader] = useState(false)

    useEffect(() => {
        tl.current = gsap.timeline({defaults: {ease: 'power1.out'}})
        .to(selector('.text'), {
            y: '0%',
            duration: 1,
            stagger: 0.25,
        })
        .to(selector('.slider'), {
            y: '0%',
            duration: '1',
            delay: '2'
        })
        .to(selector('.slider'), {
            y: '-100%',
            duration: '1',
            delay: '2'
        })
        .to(coverRef.current, {
            y: '-100%',
        }, '-=1')
    }, [])

    return(
        <div className="pageLoadAnimation" ref={coverRef}>
            <div className="intro-text">
                <h1 className="hide">
                    <span className="text">Connecting New Dots in a</span>
                </h1>
                <h1 className="hide">
                    <span className="text">Brand New Way</span>
                </h1>
            </div>
            <div className="slider">
                <img src='https://media-exp1.licdn.com/dms/image/C4D22AQEte2Z0d-UWmA/feedshare-shrink_1280/0/1640926306548?e=1645660800&v=beta&t=YSteHU5c5oge9M9TBQW_WJivgYKWamr6BiVi5Z6zLU0' alt='Greetings'></img>
            </div>
        </div>
    )
}

export default PageLoadAnimation
import './style.css'
import {useEffect, useRef, useState} from 'react'
import { gsap } from 'gsap'
import sanityClient from '../../sanity/client'

const PageLoadAnimation = () => {

    const coverRef = useRef(null);
    const selector = gsap.utils.selector(coverRef);
    const tl = useRef();

    const [greetings, setGreetings] = useState(undefined);

    const getLocalDateString = () => {
        let localDate = new Date();
        const offset = localDate.getTimezoneOffset()
        localDate = new Date(localDate.getTime() - (offset*60*1000))
        return localDate.toISOString().split('T')[0]
    }

    useEffect(() => {
        const date = getLocalDateString()
        sanityClient.fetch(`
        *[_type == 'greetings' && date == $date][0]{
            name,
            image{
            asset -> {
            url
          }
          }
          }
        `, {date})
        .then(data => {
            if(data.name) {
                setGreetings(data)
            } else {
                moveSliderNoContent()
            }
        })
    }, [])

    useEffect(() => {
        tl.current = gsap.timeline({defaults: {ease: 'power1.out'}})
        .to(selector('.text'), {
            y: '0%',
            duration: 1,
            stagger: 0.25,
        }).to(selector('.slider'), {
            y: '0%',
            duration: '1',
            delay: '3'
        })
    }, [])

    const moveSlider = () => {
        tl.current.to(selector('.slider'), {
            y: '-100%',
            duration: '1',
            delay: '2'
        })
        .to(coverRef.current, {
            y: '-100%',
        }, '-=2')
    }

    const moveSliderNoContent = () => {
        tl.current
        .to(selector('.slider'), {
            y: '-100%',
            duration: '1',
        })
        .to(coverRef.current, {
            y: '-100%',
        }, '-=2')
    }

    return(
        <div className="pageLoadAnimation" ref={coverRef}>
            <div className="intro-text">
                <h1 className="hide">
                    <span className="text"><span className="black">DZYN</span>FOX</span>
                </h1>
                <h2 className="hide">
                    <span className="text secondary">
                        Design&nbsp;<strong>Agency</strong> <span className="bar"> |&nbsp;</span>
                        Creative&nbsp;<strong>Agency</strong> 
                        <br /> 
                        Advertising&nbsp;<strong>Agency</strong> <span className="bar"> |&nbsp;</span>
                        Branding&nbsp;<strong>Agency</strong>
                    </span>
                </h2>
                <h3 className="hide">
                    <span className="text">Creating identities &amp; <span className="black">enhancing perceptions</span></span>
                </h3>
            </div>
            {greetings
                ?
                <div className="slider">
                    <img src={greetings.image.asset.url} alt={greetings.name} onLoad={moveSlider}/>
                </div>
                :
                <div className="slider"></div>
            }
        </div>
    )
}

export default PageLoadAnimation
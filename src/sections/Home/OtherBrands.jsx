import inhouseA from '../../drawables/inhouse/1.png'
import inhouseB from '../../drawables/inhouse/2.png'
import inhouseC from '../../drawables/inhouse/3.png'
import inhouseD from '../../drawables/inhouse/4.png'
import inhouseE from '../../drawables/inhouse/5.png'
import inhouseF from '../../drawables/inhouse/6.png'
import inhouseG from '../../drawables/inhouse/7.png'
import inhouseH from '../../drawables/inhouse/8.png'
import inhouseI from '../../drawables/inhouse/9.png'
import inhouseJ from '../../drawables/inhouse/10.png'
import inhouseL from '../../drawables/inhouse/12.png'
import inhouseM from '../../drawables/inhouse/13.png'
import inhouseN from '../../drawables/inhouse/14.png'
import inhouseO from '../../drawables/inhouse/15.png'
import inhouseP from '../../drawables/inhouse/16.png'

import Marquee from 'react-fast-marquee'

const OtherBrands = () => {
    return(
        <div className="OtherBrands">
            <h1 className='section-header'>Our other brands</h1>
            <div className="othersbrandlogoes">
                <Marquee pauseOnHover={true} gradient={false} speed={100}>
                    <a href='http://www.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseA} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='http://schoolhype.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseB} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseC} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseD} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseE} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseF} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseG} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseH} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='https://craftbizwhiz.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseI} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseJ} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseL} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='https://spreadinindia.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseM} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='https://marketernships.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseN} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='http://mims.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseO} alt="our other brand logo" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank" rel="nofollow noreferrer"><img src={inhouseP} alt="our other brand logo" className='otherbrandlogo'/></a>
                </Marquee>
            </div>
        </div>
    )
}

export default OtherBrands;
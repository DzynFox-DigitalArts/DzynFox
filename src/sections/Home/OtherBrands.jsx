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
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseA} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseB} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseC} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseD} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseE} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseF} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseG} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseH} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseI} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseJ} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseL} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseM} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseN} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseO} alt="" className='otherbrandlogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={inhouseP} alt="" className='otherbrandlogo'/></a>
                </Marquee>
            </div>
        </div>
    )
}

export default OtherBrands;
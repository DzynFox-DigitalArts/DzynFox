import ClientA from '../../drawables/client/1.png'
import ClientB from '../../drawables/client/2.png'
import ClientC from '../../drawables/client/3.png'
import ClientD from '../../drawables/client/4.png'
import ClientE from '../../drawables/client/5.png'
import ClientF from '../../drawables/client/6.png'
import ClientG from '../../drawables/client/7.png'
import ClientH from '../../drawables/client/8.png'
import ClientK from '../../drawables/client/11.png'
import ClientL from '../../drawables/client/12.png'
import ClientM from '../../drawables/client/13.png'
import ClientN from '../../drawables/client/14.png'
import ClientO from '../../drawables/client/15.png'
import ClientP from '../../drawables/client/16.png'
import ClientQ from '../../drawables/client/17.png'

import Marquee from 'react-fast-marquee'

const OurClients = () => {

    return (
        <div className="OurClients">
            <h1 className='section-header'>Our Clients</h1>
            <div className="clients" data-aos="zoom-in">
                <Marquee pauseOnHover={true} gradient={false} speed={100}>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientA} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientB} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientC} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientD} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientE} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientF} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientG} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientH} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientK} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientL} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientM} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientN} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientO} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientP} alt="" className='clientLogo'/></a>
                    <a href='http://www.markall.in/' target="_blank"><img src={ClientQ} alt="" className='clientLogo'/></a>
                </Marquee>
            </div>
        </div>
    )
}

export default OurClients;
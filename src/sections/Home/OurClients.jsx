import ClientH from '../../drawables/client/8.png'
import ClientK from '../../drawables/client/11.png'
import ClientL from '../../drawables/client/12.png'
import ClientM from '../../drawables/client/13.png'
import ClientO from '../../drawables/client/15.png'
import ClientP from '../../drawables/client/16.png'

import Marquee from 'react-fast-marquee'

const OurClients = () => {

    return (
        <div className="OurClients">
            <h1 className='section-header'>Our Clients</h1>
            <div className="clients" data-aos="zoom-in">
                <Marquee pauseOnHover={true} gradient={false} speed={100}>
                    <img src={ClientH} alt="" className='clientLogo'/>
                    <img src={ClientK} alt="" className='clientLogo'/>
                    <img src={ClientL} alt="" className='clientLogo'/>
                    <img src={ClientM} alt="" className='clientLogo'/>
                    <img src={ClientO} alt="" className='clientLogo'/>
                    <img src={ClientP} alt="" className='clientLogo'/>
                </Marquee>
            </div>
        </div>
    )
}

export default OurClients;
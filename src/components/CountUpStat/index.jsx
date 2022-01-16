import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import './style.css'

const CountUpStat = ({count, name, suffix, faIconName}) => {
    return(
        <div className="statGrp">
            <i className={`${faIconName} statgrpIcon`}></i>
            <div className="stats">
                <div className="statNameGrp">
                    <CountUp end={count} redraw={true} duration={1.5} delay={0.2} useEasing>
                        {({ countUpRef, start }) => (
                        <>
                        <VisibilitySensor onChange={start} delayedCall>
                            <span className="CountUpFont" ref={countUpRef} />
                        </VisibilitySensor>
                            <span className="suffix">{suffix}</span>
                        </>
                        )}
                    </CountUp>
                </div>
                <p className="statName">{name}</p>
            </div>
        </div>
    )
}

export default CountUpStat
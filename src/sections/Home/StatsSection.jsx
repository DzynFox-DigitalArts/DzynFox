import CountUpStat from "../../components/CountUpStat"

const StatsSection = () => {
    return(
        <section className="statsSection">
            <div className="statsSectionStatsContainer">
                <CountUpStat name={"Years of experience"} suffix={"+"} count={10} faIconName={"far fa-hourglass"}/>
                <CountUpStat name={"Projects handled"} count={240} faIconName={"fas fa-project-diagram"}/>
                <CountUpStat name={"Happy Customers"} count={120} faIconName={"far fa-smile-beam"}/>
            </div>
        </section>
    )
}

export default StatsSection
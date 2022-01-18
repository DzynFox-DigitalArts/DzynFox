import TeamMember from "../../components/TeamMember"
import Ria from '../../drawables/team/Ria.jpg'
import Amrit from '../../drawables/team/Amrit.jpg'
import Ruchika from '../../drawables/team/Ruchika.jpg'
import Ujjwal from '../../drawables/team/Ujjwal.jpg'
import Prabodh from '../../drawables/team/Prabodh.jpg'


const OurTeam = () => {
    return(
        <section className="OurTeam">
            <h1 className="section-header marker">Meet Our Creative Team</h1>
            <div className="members">
                <TeamMember imgUrl={Ria} designation={"Head Graphics"} name={"Ria"}/>
                <TeamMember imgUrl={Amrit} designation={"Head Animations"} name={"Amrit"}/>
                <TeamMember imgUrl={Ruchika} designation={"Graphic Designer"} name={"Ruchika"}/>
                <TeamMember imgUrl={Ujjwal} designation={"Graphic Designer"} name={"Ujjwal"}/>
                <TeamMember imgUrl={Prabodh} designation={"Web Developer"} name={"Prabodh"}/>
            </div>
        </section>
    )
}

export default OurTeam;
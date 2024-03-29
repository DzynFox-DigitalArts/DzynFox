import TeamMember from "../../components/TeamMember"
import Sinjan from '../../drawables/team/Sinjan.jpg'
import Ria from '../../drawables/team/Ria.jpg'
import Amrit from '../../drawables/team/Amrit.jpg'
import Ruchika from '../../drawables/team/Ruchika.jpg'
import Ujjwal from '../../drawables/team/Ujjwal.jpg'
import Prabodh from '../../drawables/team/Prabodh.jpg'
import Shruti from '../../drawables/team/Shruti.jpg'
import Mahasweta from '../../drawables/team/Mahasweta.jpg'


const OurTeam = () => {
    return(
        <section className="OurTeam">
            <h1 className="section-header marker">Meet Our Creative Team</h1>
            <div className="members">
                <TeamMember imgUrl={Sinjan} designation={"Founder"} name={"Sinjan"} />
                <TeamMember imgUrl={Ria} designation={"Head Graphics"} name={"Ria"} />
                <TeamMember imgUrl={Amrit} designation={"Head Animations"} name={"Amrit"}/>
                <TeamMember imgUrl={Ruchika} designation={"Graphic Designer"} name={"Ruchika"}/>
                <TeamMember imgUrl={Ujjwal} designation={"Graphic Designer"} name={"Ujjwal"}/>
                <TeamMember imgUrl={Prabodh} designation={"Web Developer"} name={"Prabodh"}/>
                <TeamMember imgUrl={Shruti} designation={"Voice Over Artist"} name={"Shruti"}/>
                <TeamMember imgUrl={Mahasweta} designation={"Illustrator"} name={"Mahasweta"}/>
            </div>
        </section>
    )
}

export default OurTeam;
import TeamMember from "../../components/TeamMember"

const OurTeam = () => {
    return(
        <section className="OurTeam">
            <h1 className="section-header marker">Meet Our Creative Team</h1>
            <div className="members">
                <TeamMember imgUrl={"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} name={"John Doe"} designation={"Software Developer"} quote={"The best method for accelerating a computer is the one that boosts it by 9.8 m/s2."} fb={'facebook.com'} gh={'github'} li={'linkedin'} ig={'instagram'}/>

                <TeamMember imgUrl={"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} name={"John Doe"} designation={"Software Developer"} quote={"The best method for accelerating a computer is the one that boosts it by 9.8 m/s2."} fb={'facebook.com'} gh={'github'} li={'linkedin'} ig={'instagram'}/>

                <TeamMember imgUrl={"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} name={"John Doe"} designation={"Software Developer"} quote={"The best method for accelerating a computer is the one that boosts it by 9.8 m/s2."} fb={'facebook.com'} gh={'github'} li={'linkedin'} ig={'instagram'}/>

                <TeamMember imgUrl={"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} name={"John Doe"} designation={"Software Developer"} quote={"The best method for accelerating a computer is the one that boosts it by 9.8 m/s2."} fb={'facebook.com'} gh={'github'} li={'linkedin'} ig={'instagram'}/>
            </div>
        </section>
    )
}

export default OurTeam;
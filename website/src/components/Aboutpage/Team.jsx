import React from 'react'
import TeamMemberCard from './TeamMember';
import Owen from "assets/svg/AboutPage/Team/Owen.svg";
import Sasha from "assets/svg/AboutPage/Team/Sasha.svg"
import Tracy from "assets/svg/AboutPage/Team/Tracy.svg";
import Anold from "assets/svg/AboutPage/Team/Anold.svg";

const TeamMembersComponent = () => {
  return (
    <div className="meet-the-team">
      <div className="container">
        <div className="section-label">/ MEET THE TEAM</div>
        <div className="title">
          <h4>
            Meet the creative minds shaping the digital experiences at B Design
            Hub
          </h4>
          <p className="paragraph-text">
            Each with their own blend of skills, perspectives, personality and a
            common goal: to deliver exceptional results to our clients.
          </p>
        </div>
        <div className="team-members">
          <TeamMemberCard
            name={"Sasha Nannyange"}
            profession={"Copy Writer & Digital Marketeer"}
            image={Sasha}
          />
          <TeamMemberCard
            name={"Tracy Mawanda"}
            profession={"Mobile app Engineer"}
            image={Tracy}
          />
          <TeamMemberCard
            name={"George Owen Kivumbi"}
            profession={"Backend & DevOps Engineer"}
            image={Owen}
          />
          <TeamMemberCard
            name={"Anold Nsubuga"}
            profession={"Embedded Systems Engineer"}
            image={Anold}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamMembersComponent
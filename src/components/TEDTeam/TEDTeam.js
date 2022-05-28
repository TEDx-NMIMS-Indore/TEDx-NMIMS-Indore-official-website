// Component for showing up the profile of all the team members in the /team page

import MemberProfile from "./memberProfile/memberProfile";
import "./TEDTeam.scss";
import data from "../../masterData.json";

// Member details are read from src/masterData.json

// Creating the list of components for all the members of all sub-committees one by one

const AllMembers = [
    "Organizer",
    "Curators",
    "Executive producers",
    "Event managers",
    "Finance heads",
    "Digital designs heads",
    "Technical team",
    "Manual designs head",
    "Content & marketing head",
    "Media head",
    "Logistics head",
].map((element, index) => {
    return data.teamMembers[element].map((value, index) => {
        return (
            // All the members data get into the MemberProfile component for display
            <MemberProfile
                name={value.name}
                introduction={value.introduction}
                profileImage={value.profileImage}
                post={value.post}
                gender={value.gender}
                key={index}
            />
        );
    });
});

export default function Team() {
    return (
        <div className="TEDTeamBackground">
            <h1>Meet The Team</h1>
            {/* <DarkTEDxLogo /> */}

            {/* {Organizer} */}
            <div className="membersProfileDiv">{AllMembers}</div>
        </div>
    );
}

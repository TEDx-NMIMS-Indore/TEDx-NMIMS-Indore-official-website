import MemberProfile from "./memberProfile/memberProfile";
import GradientHeading from "../gradientHeading/gradientHeading";
import "./TEDTeam.scss";
import data from "../../masterData.json";

// Member details are read from src/masterData.json

// Creating the list of components for all the members of all sub-committees one by one

const Organizer = (
    <div className="membersProfileDiv">
        {data.teamMembers.Organizer.map((value, index) => {
            return (
                <MemberProfile
                    name={value.name}
                    introduction={value.introduction}
                    profileImage={value.profileImage} 
                    post={value.post} 
                    gender = {value.gender}
                />
            );
        })}
    </div>
);

const Curators = (
    <div className="membersProfileDiv">
        {data.teamMembers.Curators.map((value, index) => {
            return (
                <MemberProfile
                    name={value.name}
                    introduction={value.introduction}
                    profileImage={value.profileImage} 
                    post={value.post} 
                    gender = {value.gender}
                />
            );
        })}
    </div>
);

const ExecutiveProducers = (
    <div className="membersProfileDiv">
        {data.teamMembers["Executive producers"].map((value, index) => {
            return (
                <MemberProfile
                    name={value.name}
                    introduction={value.introduction}
                    profileImage={value.profileImage} 
                    post={value.post} 
                    gender = {value.gender}
                />
            );
        })}
    </div>
);

const EventManagers = (
    <div className="membersProfileDiv">
        {data.teamMembers["Event managers"].map((value, index) => {
            return (
                <MemberProfile
                    name={value.name}
                    introduction={value.introduction}
                    profileImage={value.profileImage} 
                    post={value.post} 
                    gender = {value.gender}
                />
            );
        })}
    </div>
);

const FinanceHeads = (
    <div className="membersProfileDiv">
        {data.teamMembers["Finance heads"].map((value, index) => {
            return (
                <MemberProfile
                    name={value.name}
                    introduction={value.introduction}
                    profileImage={value.profileImage} 
                    post={value.post} 
                    gender = {value.gender}
                />
            );
        })}
    </div>
);

const DigitalDesignHeads = (
    <div className="membersProfileDiv">
        {data.teamMembers["Digital designs heads"].map((value, index) => {
            return (
                <MemberProfile
                    name={value.name}
                    introduction={value.introduction}
                    profileImage={value.profileImage}
                    post={value.post}
                    gender={value.gender}
                />
            );
        })}
    </div>
);

const ManualDesignHeads = (
    <div className="membersProfileDiv">
        {data.teamMembers["Manual designs head"].map((value, index) => {
            return (
                <MemberProfile
                    name={value.name}
                    introduction={value.introduction}
                    profileImage={value.profileImage}
                    post={value.post}
                    gender={value.gender}
                />
            );
        })}
    </div>
);

const ContentMarketingHeads = (
    <div className="membersProfileDiv">
        {data.teamMembers["Content & marketing head"].map((value, index) => {
            return (
                <MemberProfile
                    name={value.name}
                    introduction={value.introduction}
                    profileImage={value.profileImage}
                    post={value.post}
                    gender={value.gender}
                />
            );
        })}
    </div>
);

const TechnicalTeam = (
    <div className="membersProfileDiv">
        {data.teamMembers["Technical team"].map((value, index) => {
            return (
                <MemberProfile
                    name={value.name}
                    introduction={value.introduction}
                    profileImage={value.profileImage}
                    post={value.post}
                    gender={value.gender}
                />
            );
        })}
    </div>
);

const MediaTeam = (
    <div className="membersProfileDiv">
        {data.teamMembers["Media head"].map((value, index) => {
            return (
                <MemberProfile
                    name={value.name}
                    introduction={value.introduction}
                    profileImage={value.profileImage}
                    post={value.post}
                    gender={value.gender}
                />
            );
        })}
    </div>
);

const LogisticsTeam = (
    <div className="membersProfileDiv">
        {data.teamMembers["Logistics head"].map((value, index) => {
            return (
                <MemberProfile
                    name={value.name}
                    introduction={value.introduction}
                    profileImage={value.profileImage}
                    post={value.post}
                    gender={value.gender}
                />
            );
        })}
    </div>
);

export default function Team() {
    return (
        <div className="TEDTeamBackground">
            <GradientHeading heading="TEDxNMIMS Team" />
            {Organizer}
            {Curators}
            {ExecutiveProducers}
            {EventManagers}
            {FinanceHeads}
            {DigitalDesignHeads}
            {ManualDesignHeads}
            {ContentMarketingHeads}
            {TechnicalTeam}
            {MediaTeam}
            {LogisticsTeam}
        </div>
    );
}

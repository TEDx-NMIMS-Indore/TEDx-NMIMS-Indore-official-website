// Sponsors 2022 component

import MemberProfile from "../TEDTeam/memberProfile/memberProfile";
import "./speakers.scss";
import data from "../../masterData.json";

const SpeakersComponents = (
    <div className="membersProfileDiv">
        {data.speakers["2022"].speakersList.map((speakerName, index) => {
            return (
                <MemberProfile
                    name={speakerName}
                    theme="dark" 
                    post={
                        data.speakers["2022"].speakersDescription[speakerName]
                            .post
                    }
                    introduction={
                        data.speakers["2022"].speakersDescription[speakerName]
                            .introduction
                    }
                    profileImage={
                        data.speakers["2022"].speakersDescription[speakerName]
                            .profileImage
                    }
                />
            );
        })}
    </div>
);

export default function Speakers2022() {
    return (
        <div className="BlackTEDTeamBackground membersProfileDiv">
            {/* <TEDxLogo /> */}
            <h1>Speakers '22</h1>
            {SpeakersComponents}
        </div>
    );
}

import MemberProfile from "../TEDTeam/memberProfile/memberProfile";
import data from "../../masterData.json";

const SpeakersComponents = (
    <div className="membersProfileDiv">
        {data.speakers["2019"].speakersList.map((speakerName, index) => {
            return (
                <MemberProfile
                    name={speakerName}
                    gender={
                        data.speakers["2019"].speakersDescription[speakerName]
                            .gender
                    }
                    post={
                        data.speakers["2019"].speakersDescription[speakerName]
                            .post
                    }
                    introduction={
                        data.speakers["2019"].speakersDescription[speakerName]
                            .introduction
                    }
                    profileImage={
                        data.speakers["2019"].speakersDescription[speakerName]
                            .profileImage
                    }
                />
            );
        })}
    </div>
);

export default function Speakers() {
    return (
        <div className="TEDTeamBackground membersProfileDiv">
            <h1>TEDxNMIMSIndore Speakers '19</h1>
            {SpeakersComponents}
        </div>
    );
}

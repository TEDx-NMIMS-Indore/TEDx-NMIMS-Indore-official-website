// Responsible for the members card in the TEDTeam, and speakers

import "./memberProfile.scss";
import ScrollAnimation from "react-animate-on-scroll";
export default function MemberProfile(props) {
    if (props.theme != "dark") {
        return (
            <div className="profileDiv">
                <div className="profileImageDiv">
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <img
                            loading="lazy"
                            src={props.profileImage}
                            className="avatar"
                            decoding="async"
                            alt={props.name}
                        />
                    </ScrollAnimation>
                </div>
                <div className="name">{props.name}</div>
                <div className="post">{props.post}</div>
                <div className="introduction">{props.introduction}</div>
            </div>
        );
    } else {
        return (
            <div className="blackProfileDiv">
                <div className="profileImageDiv">
                    <ScrollAnimation animateIn="fadeIn">
                        <img
                            loading="lazy"
                            src={props.profileImage}
                            className="avatar"
                            decoding="async"
                            alt={props.name}
                        />
                    </ScrollAnimation>
                </div>

                <div className="name">{props.name}</div>
                <div className="post">{props.post}</div>
                <div className="introduction">{props.introduction}</div>
            </div>
        );
    }
}

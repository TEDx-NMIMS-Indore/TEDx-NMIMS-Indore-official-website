import "./memberProfile.scss";
import Avatar from "antd/lib/avatar";
import ScrollAnimation from "react-animate-on-scroll";

export default function MemberProfile(props) {
    // Function to put up the fallback image
    function addDefaultSrc(ev) {
        // Fallback images will be on the basis of gender
        if (props.gender == "Female") {
            ev.target.src = "images/femaleIcon.webp";
        } else {
            ev.target.src = "images/maleIcon.webp";
        }
    }
    if (props.theme != "dark") {
        return (
            <div className="profileDiv">
                <div className="profileImageDiv">
                    {/* <img
                    src={props.profileImage}
                    className="profileImage"
                    onError={addDefaultSrc}
                    alt={"Profile picture of " + props.name}
                    decoding="async"
                /> */}
                    <ScrollAnimation
                        animateIn="bounceInLeft"
                        animateOut="bounceOutRight"
                    >
                        <Avatar
                            src={props.profileImage}
                            shape="circle"
                            size={200}
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
                    {/* <img
                    src={props.profileImage}
                    className="profileImage"
                    onError={addDefaultSrc}
                    alt={"Profile picture of " + props.name}
                    decoding="async"
                /> */}
                    <ScrollAnimation
                        animateIn="bounceInRight"
                        animateOut="bounceOutLeft"
                    >
                        <Avatar
                            src={props.profileImage}
                            shape="circle"
                            size={200} 
                            alt = {props.name}
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

// Responsible for the appearance of the very first page of the website, containing logo anf the theme

import "./title.scss";
import TEDxLogo from "../TEDxLogo/TEDxLogo";

export default function Heading() {
    return (
        <div className="headingDiv">
            <TEDxLogo />
            <h1 className="Theme">
                Unravel <span className="redText">To</span> Unleash
            </h1>
            <div className="eventDate">
                This 27th August, Be The Change You Want To See.
            </div>
            <button className="buttonStyle">
                Join today
            </button>
        </div>
    );
}

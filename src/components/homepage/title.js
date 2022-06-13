// Responsible for the appearance of the very first page of the website, containing logo anf the theme

import "./title.scss";
import TEDxLogo from "../TEDxLogo/TEDxLogo";

const NewLine = () => {
    if (window.innerWidth < 1000) {
        return <br />;
    } else {
    }
};

export default function Heading() {
    return (
        <div className="headingDiv">
            <TEDxLogo />
            <h1 className="Theme">
                Unravel <span className="redText">To</span> Unleash
            </h1>
            <div className="eventDate">
                This 27th August
                <NewLine /> Be The Change You Want To See.
            </div>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe-zXQ7wGJCm1z4SiXx8FFElp1ZF-cU3VVWL3bOT2JlGQVanA/viewform?usp=sf_link"
                target="_blank"
            >
                <button className="buttonStyle">Join today</button>
            </a>
        </div>
    );
}

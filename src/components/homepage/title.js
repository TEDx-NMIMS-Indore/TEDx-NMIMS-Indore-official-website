import "./title.scss";
import TEDxLogo from "../TEDxLogo/TEDxLogo";
import { Button } from "antd";
import "antd/dist/antd.css";
import GradientHeading from "../gradientHeading/gradientHeading";

export default function Heading() {
    return (
        <div className="headingDiv">
            {/* <img
                src="images/TedxLogo.jpeg"
                className="tedLogo"
                alt="TEDxNMIMS, Indore logo"
            />
            ; */}
            <TEDxLogo />
            <h1 className="Theme">
                Unravel <span className="redText">To</span> Unleash
            </h1>
            <div className="eventDate">
                This 27th August, Be The Change You Want To Be.
            </div>

            <Button type="default" className="button" size="large">
                Join today
            </Button>
        </div>
    );
}

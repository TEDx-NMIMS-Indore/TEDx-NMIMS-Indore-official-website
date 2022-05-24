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
            <h1 className="Theme">Unravel To Unleash</h1>
            <div className="eventDate">This 27th August, be the change you want to be.</div>
            
            <Button type="primary" className="button" size="large">
                Join today
            </Button>
        </div>
    );
}

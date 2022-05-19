import "./title.scss";
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
            <h1 className="TEDName">
                <span className="tedStyle">
                    TED<sup>x</sup>
                </span>
                NMIMSIndore
                <br />
                <div className="smallText">
                    <span className="tedStyle">x</span> = independently
                    organized TED event
                </div>
            </h1>
            <h1 className="Theme">Unravel To Unleash</h1>
            <div className="eventDate">This 27th August, be the change you want to be.</div>
            
            <Button type="primary" className="button" size="large">
                Join today
            </Button>
        </div>
    );
}

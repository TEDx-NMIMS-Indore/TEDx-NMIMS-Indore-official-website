import "./aboutNMIMS.scss";
import GradientHeading from "../gradientHeading/gradientHeading";
import data from "../../masterData.json";
import { Button } from "antd";

const showMoreButtonComponent = () => {
    if (data.nmimsDescription.showMoreButton) {
        return (
            <a href={data.nmimsDescription.link} target="_blank">
                <Button type="primary" className="moreButton" size="large">
                    More
                </Button>
            </a>
        );
    }
};

export default function AboutNMIMS() {
    return (
        <div className="NMIMSBackground">
            <div className="descSection">
                {/* Putting up the heading of NMIMS */}
                <GradientHeading heading={data.nmimsDescription.title} />
                {/* Putting up the description of NMIMS */}
                <div className="descContent">
                    {data.nmimsDescription.description}
                </div>
                {showMoreButtonComponent()}
            </div>
        </div>
    );
}

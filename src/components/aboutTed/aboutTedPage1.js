import { Button } from "antd";
import "antd/dist/antd.css";
import "./aboutTed.scss";
import data from "../../masterData.json";
import GradientHeading from "../gradientHeading/gradientHeading";

const showMoreButtonComponent = () => {
    if (data.tedDescription.showMoreButton) {
        return (
            <a href={data.tedDescription.link} target="_blank">
                <Button type="primary" className="moreButton" size="large">
                    More
                </Button>
            </a>
        );
    }
}

export default function AboutTed() {
    return (
        <div className="aboutTedBackground">
            <div className="descSection">
                <GradientHeading heading = {data.tedDescription.title} />
                <div className="descContent">
                    {data.tedDescription.description}
                </div>
                {showMoreButtonComponent()}
            </div>
        </div>
    );
}
import "./aboutNMIMS.scss";
import GradientHeading from "../gradientHeading/gradientHeading";
import data from "../../masterData.json";
import { Button } from "antd";
import Glass from "../glassSection/glass";

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
            <img src="images/nmimsCampus.webp" className="nmimsPic" />
            <h1>About NMIMS</h1>
            <Glass showHeading={true} heading={data.nmimsDescription.title} content = {data.nmimsDescription.description} />
        </div>
    );
}

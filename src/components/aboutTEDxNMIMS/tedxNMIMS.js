import "./tedexNMIMS.scss";
import data from "../../masterData.json";
import GradientHeading from "../gradientHeading/gradientHeading";
import { Button } from "antd";

const showMoreButtonComponent = () => {
    if (data.tedxNMIMSDescription.showMoreButton) {
        return (
            <a href={data.tedxNMIMSDescription.link} target="_blank">
                <Button type="primary" className="moreButton" size="large">
                    More
                </Button>
            </a>
        );
    }
};

export default function TedxNMIMS() {
    return (
        <div className="aboutTedxNMIMS">
            <div className="descSection">
                <GradientHeading heading={data.tedxNMIMSDescription.title} />
                <div className="descContent">
                    {data.tedxNMIMSDescription.description}
                </div>
                {showMoreButtonComponent()}
            </div>
        </div>
    );
}

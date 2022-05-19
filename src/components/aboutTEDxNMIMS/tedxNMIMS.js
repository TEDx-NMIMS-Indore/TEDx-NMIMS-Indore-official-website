import "./tedexNMIMS.scss";
import data from "../../masterData.json";
import GradientHeading from "../gradientHeading/gradientHeading";
import { Button } from "antd";
import Glass from "../glassSection/glass";

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
            <Glass heading = {data.tedxNMIMSDescription.title} content = {data.tedxNMIMSDescription.description} />
        </div>
    );
}

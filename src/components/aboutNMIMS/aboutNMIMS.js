import "./aboutNMIMS.scss";
import data from "../../masterData.json";
import { Button } from "antd";
import ImagesCarousel from "../carousel/carousel";

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
        <>
            <ImagesCarousel forPage = "NMIMS"/>
            <div className="NMIMSBackground">
                <div className="headingContentSection">
                    
                        <h1 style={{ color: "black" }}>About NMIMS Indore</h1>
                    <p>{data.nmimsDescription.description}</p>
                </div>
            </div>
        </>
    );
}

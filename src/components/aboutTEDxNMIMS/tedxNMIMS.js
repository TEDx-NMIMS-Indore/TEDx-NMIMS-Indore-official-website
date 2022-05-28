import "./tedxNMIMS.scss";
import TEDxLogo from "../TEDxLogo/TEDxLogo";
import data from "../../masterData.json";
import ImagesCarousel from "../carousel/carousel";
import BlackGlass from "../glassSection/blackGlass";

export default function TedxNMIMS() {
    return (
        <>
            <ImagesCarousel forPage="TEDxNMIMS" />
            <div className="aboutTedxNMIMS">
                <div className="centerContent">
                    <TEDxLogo />
                    <BlackGlass
                        heading={data.tedxNMIMSDescription.title}
                        content={data.tedxNMIMSDescription.description}
                        showHeading={false}
                    />
                </div>
            </div>
        </>
    );
}

import "./tedexNMIMS.scss";
import data from "../../masterData.json";

export default function TedxNMIMS() {
    return (
        <div className="aboutTedxNMIMS">
            <div className="descSection">
                <div className="descHeading">{data.tedxNMIMSDescription.title}</div>
                <div className="descContent">
                    {data.tedxNMIMSDescription.description}
                </div>
            </div>
        </div>
    );
}

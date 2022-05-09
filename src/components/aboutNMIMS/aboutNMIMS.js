import "./aboutNMIMS.scss";
import data from "../../masterData.json";
export default function AboutNMIMS() {
    return (
        <div className="NMIMSBackground">
            <div className="descSection">
                <div className="descHeading">
                    { data.nmimsDescription.title}
                </div>
                <div className="descContent">
                    {data.nmimsDescription.description}
                </div>
            </div>
        </div>
    );
}
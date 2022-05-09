import "./aboutTed.scss";
import data from "../../masterData.json";

export default function AboutTed() {
    return (
        <div className="aboutTedBackground">
            <div className="descSection">
                <div className="descHeading">{data.tedDescription.title}</div>
                <div className="descContent">
                    {data.tedDescription.description}
                </div>
            </div>
        </div>
    );
}
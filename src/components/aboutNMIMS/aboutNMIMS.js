import data from "../../masterData.json";
import DescComp from "../descComponent/descComp";

export default function AboutNMIMS() {
    
    return (
        <DescComp headingRequired = {true} content = {data.nmimsDescription.description} heading = "About NMIMS" theme="light"/>
    )
}

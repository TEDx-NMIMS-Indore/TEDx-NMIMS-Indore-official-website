import data from "../../masterData.json";
import DescComp from "../descComponent/descComp";
export default function TEDxNMIMS() {
    return (
        <>
            <DescComp theme="dark" headingRequired={true} content={data.tedxNMIMSDescription.description} />
        </>
    )
}
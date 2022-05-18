import "./title.scss";
import { Button } from "antd";
import "antd/dist/antd.css";

export default function Heading() {
    return (
        <div className="headingDiv">
            <img
                src="tedximages/TEDx_logo_k_RGB_3650.jpg"
                className="tedLogo"
                alt="TEDxNMIMS, Indore logo"
            />
            ;
            {/* <Button type="primary" className="button" size="large">
                Join today
            </Button> */}
        </div>
    );
}

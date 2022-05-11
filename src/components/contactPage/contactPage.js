import "./contactPage.scss";
import GradientHeading from "../gradientHeading/gradientHeading";
import { Tooltip } from "antd";

export default function ContactPage() {
    return (
        <div className="contactBackgroundDiv">
            <GradientHeading heading="Contact" />
            <div className="contactPageGridDiv">
                <div className="contactPageGridDivLeft">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4288170488344!2d75.79236321477988!3d22.74946208509207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396301fb24138e1d%3A0xac456fd4ef7e05c9!2sSVKM&#39;s%20NMIMS%2C%20Indore!5e0!3m2!1sen!2sin!4v1652194576897!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="contactPageGridDivRight">
                    <Tooltip
                        color="pink"
                        position="topLeft"
                        title="Instagram"
                        arrowPointAtCenter
                    >
                        <a href="#" target="_blank">
                            <div className="socialMedia">
                                <img src="images/icons/instagram.png" />
                                @tedx-nmims-indore
                            </div>
                        </a>
                    </Tooltip>
                    <Tooltip
                        color="#009AE5"
                        position="topLeft"
                        title="Linkedin"
                        arrowPointAtCenter
                    >
                        <a href="#" target="_blank">
                            <div className="socialMedia">
                                <img src="images/icons/linkedin.png" />
                                @tedx-nmims-indore
                            </div>
                        </a>
                    </Tooltip>
                    <Tooltip
                        color="#FFCD14"
                        position="topLeft"
                        title="EMail"
                        arrowPointAtCenter
                    >
                        <a
                            href="mailto:sam.varg.2003@gmail.com"
                            target="_blank"
                        >
                            <div className="socialMedia">
                                <img src="images/icons/email.png" />
                                tedxNmimsIndore@gmail.com
                            </div>
                        </a>
                    </Tooltip>
                    <Tooltip
                        color="#03A9F4"
                        position="topLeft"
                        title="Twitter"
                        arrowPointAtCenter
                    >
                        <a href="#" target="_blank">
                            <div className="socialMedia">
                                <img src="images/icons/twitter.png" />
                                @tedx-nmims-indore
                            </div>
                        </a>
                    </Tooltip>
                    <Tooltip
                        color="#3E77BF"
                        position="topLeft"
                        title="GitHub"
                        arrowPointAtCenter
                    >
                        <a
                            href="https://github.com/TEDx-NMIMS-Indore"
                            target="_blank"
                        >
                            <div className="socialMedia">
                                <img src="images/icons/github.png" />
                                @tedx-nmims-indore
                            </div>
                        </a>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}

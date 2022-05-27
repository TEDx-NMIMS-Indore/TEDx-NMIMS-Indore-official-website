import "./contactPage.scss";
import GradientHeading from "../gradientHeading/gradientHeading";
import { Tooltip } from "antd";
import data from "../../masterData.json";
import { Form, Input, Button, Checkbox } from "antd";

export default function ContactPage() {
    return (
        <div className="contactBackgroundDiv">
            <h1>Contacts</h1>
            <div className="contactPageGridDiv">
                <div className="contactPageGridDivLeft">
                    {/* Adding google maps */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4288170488344!2d75.79236321477988!3d22.74946208509207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396301fb24138e1d%3A0xac456fd4ef7e05c9!2sSVKM&#39;s%20NMIMS%2C%20Indore!5e0!3m2!1sen!2sin!4v1652194576897!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        alt="Google maps showing NMIMS, Indore's location"
                    ></iframe>
                </div>
                <div className="contactPageGridDivRight">
                    {/* Adding usernames, and logos of social media, and mail id */}
                    {/* Instagram */}
                    <Tooltip
                        color="#F63285"
                        position="topLeft"
                        title="Instagram"
                        arrowPointAtCenter
                    >
                        <a
                            target="_blank"
                            href={data.tedexNMIMSContactDetails.instagram.link}
                        >
                            <div className="socialMedia">
                                <img
                                    src="images/icons/instagram.png"
                                    alt="Instagram logo"
                                />
                            </div>
                        </a>
                    </Tooltip>

                    {/* EMail ID */}
                    <Tooltip
                        color="#000000"
                        position="topLeft"
                        title="EMail"
                        arrowPointAtCenter
                    >
                        <a
                            href={
                                "mailto:" +
                                data.tedexNMIMSContactDetails.mail.link
                            }
                            target="_blank"
                        >
                            <div className="socialMedia">
                                <img
                                    src="images/icons/email.png"
                                    alt="EMail logo"
                                />
                            </div>
                        </a>
                    </Tooltip>
                    {/* Facebook */}
                    <Tooltip
                        color="#1877F2"
                        position="topLeft"
                        title="Facebook"
                        arrowPointAtCenter
                    >
                        <a
                            href={data.tedexNMIMSContactDetails.facebook.link}
                            target="_blank"
                        >
                            <div className="socialMedia">
                                <img
                                    src="images/icons/facebook.png"
                                    alt="Facebook logo"
                                />
                            </div>
                        </a>
                    </Tooltip>
                    {/* YouTube */}
                    <Tooltip
                        color="#FF0000"
                        position="topLeft"
                        title="YouTube"
                        arrowPointAtCenter
                    >
                        <a
                            href={data.tedexNMIMSContactDetails.youtube.link}
                            target="_blank"
                        >
                            <div className="socialMedia">
                                <img
                                    src="images/icons/youtube.png"
                                    alt="Facebook logo"
                                />
                            </div>
                        </a>
                    </Tooltip>
                </div>
                <div className="credits">
                    Website made by:
                    <a
                        href="https://www.linkedin.com/in/sam-varghese-1a7701209/"
                        target="_blank"
                    >
                        Sam Varghese
                    </a>
                </div>
            </div>
        </div>
    );
}

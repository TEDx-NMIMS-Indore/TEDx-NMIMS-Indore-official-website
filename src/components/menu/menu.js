import "./menu.scss";
import { useState } from "react";

export default function Menu(props) {
    const [getAboutState, setAboutState] = useState(false);
    const [getSpeakerState, setSpeakerState] = useState(false);

    // Function responsible for returning the element inside sub-menu, and for hiding/ making it appear
    function HideSubMenuDiv(forComponent) {
        if (forComponent == "About") {
            return getAboutState ? (
                <div
                    className="subMenuItemDiv"
                    onMouseLeave={() => {
                        setAboutState(false);
                    }}
                >
                    <div
                        className="subMenuItem"
                        onClick={(e) => {
                            scroll(1);
                            setAboutState(!getAboutState);
                        }}
                    >
                        NMIMS Indore
                    </div>
                    <div
                        className="subMenuItem"
                        onClick={(e) => {
                            scroll(2, true, 1.5);
                            setAboutState(!getAboutState);
                        }}
                    >
                        TEDxNMIMSIndore
                    </div>
                </div>
            ) : null;
        } else if (forComponent == "Speakers") {
            return getSpeakerState ? (
                <div
                    className="subMenuItemDiv"
                    onMouseLeave={() => {
                        setSpeakerState(false);
                    }}
                >
                    <a href="/speakers2019">
                        <div className="subMenuItem">Speakers '19</div>
                    </a>
                    <a href="/speakers2022">
                        <div className="subMenuItem">Speakers '22</div>
                    </a>
                </div>
            ) : null;
        }
    }

    // Function to scroll a page pages*pageHeight times
    function scroll(pages, MakeResponsive = false, responsivePages = 0) {
        if (!MakeResponsive) {
            window.scrollTo(0, window.innerHeight * pages);
        } else {
            if (window.innerWidth < 1000) {
                window.scrollTo(0, window.innerHeight * responsivePages);
            } else {
                window.scrollTo(0, window.innerHeight * pages);
            }
        }
    }
    if (props.forPage == "newPage") {
        return (
            <div className="menuDiv">
                <div>
                    <a href="/">
                        <img
                            loading="lazy"
                            src="images/tedxLogo.webp"
                            alt="TEDxNMIMSIndore Logo"
                            decoding="async"
                        />
                    </a>
                </div>
                <div className="rtMenu">
                    <a href="/">
                        <div className="menuItem">Home</div>
                    </a>
                    <a href="/speakers">
                        <div className="menuItem">Speakers</div>
                    </a>
                    <a href="/team">
                        <div className="menuItem">Team</div>
                    </a>
                    <a href="/sponsors2019">
                        <div className="menuItem">Sponsors '19</div>
                    </a>
                    <a href="/contact">
                        <div className="menuItem">Contact</div>
                    </a>
                </div>
            </div>
        );
    } else {
        return (
            <div className="menuDiv">
                <div>
                    <a href="/">
                        <img
                            loading="lazy"
                            src="images/tedxLogo.webp"
                            alt="TEDxNMIMSIndore Logo"
                            decoding="async"
                        />
                    </a>
                </div>
                <div className="rtMenu">
                    <div
                        className="menuItem"
                        onMouseEnter={() => {
                            setAboutState(true);
                        }}
                        onClick={() => {
                            setAboutState(!getAboutState);
                        }}
                    >
                        About
                        {HideSubMenuDiv("About")}
                    </div>
                    <div
                        className="menuItem"
                        onClick={(e) => {
                            scroll(3.2, true, 2.3);
                        }}
                        onMouseEnter={() => {
                            setAboutState(false);
                            setSpeakerState(false);
                        }}
                    >
                        Team
                    </div>
                    <div
                        className="menuItem"
                        onClick={(e) => {
                            scroll(8.7, true, 7.7);
                            setSpeakerState(!getSpeakerState);
                        }}
                        onMouseEnter={() => {
                            setSpeakerState(true);
                        }}
                    >
                        Speakers
                        {HideSubMenuDiv("Speakers")}
                    </div>
                    <a href="/sponsors2022">
                        <div
                            className="menuItem"
                            onMouseEnter={() => {
                                setSpeakerState(false);
                            }}
                        >
                            Sponsors
                        </div>
                    </a>
                    <div
                        className="menuItem"
                        onMouseEnter={() => {
                            setSpeakerState(false);
                        }}
                        onClick={(e) => {
                            scroll(13.2, true, 40);
                        }}
                    >
                        Contact
                    </div>
                </div>
            </div>
        );
    }
}

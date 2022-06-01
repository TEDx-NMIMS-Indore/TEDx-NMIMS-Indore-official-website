import "./menu.scss";
import { useState } from "react";

export default function Menu() {
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
                            scroll(2);
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
                    <div className="subMenuItem">Speakers '19</div>
                    <div className="subMenuItem">Speakers '22</div>
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

    return (
        <div className="menuDiv">
            <a href="/">
                <img
                    src="images/tedxLogo.webp"
                    alt="TEDxNMIMSIndore Logo"
                    decoding="async"
                />
            </a>
            <div
                className="menuItem"
                onMouseEnter={() => {
                    setAboutState(true);
                }}
            >
                About
                {HideSubMenuDiv("About")}
            </div>
            <div
                className="menuItem"
                onClick={(e) => {
                    scroll(3.4, true, 4.4);
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
                    scroll(9, true, 9.5);
                    setSpeakerState(!getSpeakerState);
                }}
                onMouseEnter={() => {
                    setSpeakerState(true);
                }}
            >
                Speakers
                {HideSubMenuDiv("Speakers")}
            </div>
            <div
                className="menuItem"
                onMouseEnter={() => {
                    setSpeakerState(false);
                }}
                onClick={(e) => {
                    scroll(13.7);
                }}
            >
                Sponsors
            </div>

            <div
                className="menuItem"
                onMouseEnter={() => {
                    setSpeakerState(false);
                }}
                onClick={(e) => {
                    scroll(13.7, true, 14);
                }}
            >
                Contact
            </div>
        </div>
    );
}

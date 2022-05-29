import "./menu.scss";
import { useState } from "react";

// const SubmenuDivElements = (
//     <div>
//         {const [getAboutState, setAboutState] = useState(true); const element = (
//         <div className="subMenuItemDiv">
//             <div className="subMenuItem">NMIMS Indore</div>
//             <div className="subMenuItem">TEDxNMIMSIndore</div>
//         </div>
//         ); return getAboutState ? element : null;}
//     </div>
// );

export default function Menu() {
    const [getAboutState, setAboutState] = useState(false);
    const [getSpeakerState, setSpeakerState] = useState(false);

    function HideSubMenuDiv(forComponent) {
        if (forComponent == "About") {
            return getAboutState ? (
                <div
                    className="subMenuItemDiv"
                    onMouseLeave={() => {
                        setAboutState(false);
                    }}
                >
                    <div className="subMenuItem">NMIMS Indore</div>
                    <div className="subMenuItem">TEDxNMIMSIndore</div>
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

    function scroll(pages) {
        window.scrollTo(0, window.innerHeight * pages);
    }
    return (
        <div className="menuDiv">
            <a href="/">
                <img
                    src="images/tedxLogo.png"
                    alt="TEDxNMIMSIndore Logo"
                    decoding="async"
                />
            </a>
            <div
                className="menuItem"
                onClick={(e) => scroll(0)}
                onMouseEnter={() => {
                    setAboutState(false);
                }}
            >
                Home
            </div>
            <div
                className="menuItem"
                onClick={(e) => scroll(1)}
                onMouseEnter={() => {
                    setAboutState(true);
                }}
            >
                About
                {HideSubMenuDiv("About")}
            </div>
            <div
                className="menuItem"
                onClick={(e) => scroll(3.1)}
                onMouseEnter={() => {
                    setAboutState(false);
                    setSpeakerState(false);
                }}
            >
                Team
            </div>
            <div
                className="menuItem"
                onClick={(e) => scroll(8.3)}
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
                onClick={(e) => scroll(12.3)}
            >
                Contact
            </div>
        </div>
    );
}

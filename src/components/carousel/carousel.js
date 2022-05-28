// Responsible for the appearance of the carousel in the about NMIMS, and about TEDxNMIMSIndore page

import React from "react";
import "./carousel.scss";
import { Carousel } from "antd";

// Carousel for the about NMIMS page

const NMIMSCarousel = () => {
    return (
        <div className="carousel">
            <Carousel
                className="realCarousel"
                autoplay
                style={{ backgroundColor: "black" }}
            >
                {[1, 2, 3, 4, 5, 6, 7].map((element, index) => {
                    const imagePath = "images/NMIMS/" + element + ".jpeg";
                    return (
                        <div key={3}>
                            {/* <div
                                className="carouselDiv"
                                style={{
                                    backgroundImage: `url(${imagePath})`,
                                    height: "50vh",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    decoding: "async"
                                }}
                            ></div> */}
                            <div className="centerWhiteDivImage">
                                <img
                                    src={imagePath}
                                    style={{
                                        backgroundImage: `url(${imagePath})`,
                                        height: "60vh",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        decoding: "async",
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

// Carousel for the TEDxNMIMSIndore page

const TEDxNMIMSCarousel = () => {
    return (
        <div className="carousel">
            <Carousel className="realCarousel" autoplay>
                {[
                    "images/PastTEDx/IMG_1576.JPG",
                    "images/PastTEDx/IMG_1584.JPG",
                    "images/PastTEDx/IMG_1594.JPG",
                    "images/PastTEDx/IMG_1601.JPG",
                    "images/PastTEDx/IMG_1612.JPG",
                    "images/PastTEDx/IMG_1638.JPG",
                    "images/PastTEDx/IMG_1661.JPG",
                ].map((element, index) => {
                    const imagePath = element;
                    return (
                        <div key={3}>
                            {/* <div
                                className="carouselDiv"
                                style={{
                                    backgroundImage: `url(${imagePath})`,
                                    height: "80vh",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    decoding: "async"
                                }}
                            ></div> */}
                            <div className="centerDivImage">
                                <img
                                    src={imagePath}
                                    style={{
                                        backgroundImage: `url(${imagePath})`,
                                        height: "60vh",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        decoding: "async",
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default function ImagesCarousel(props) {
    
    // The exact carousel to export is determined by the prop it receives, if its NMIMS, then NMIMSCarousel, else TEDxNMIMSCarousel is exported

    if (props.forPage == "NMIMS") {
        return NMIMSCarousel();
    } else if (props.forPage == "TEDxNMIMS") {
        return TEDxNMIMSCarousel();
    }
}

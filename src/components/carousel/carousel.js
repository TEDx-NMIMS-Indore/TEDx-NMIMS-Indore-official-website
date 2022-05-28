import React from "react";
import "./carousel.scss";
import { Carousel } from "antd";

const NMIMSCarousel = () => {
    return (
        <div className="carousel">
            <Carousel className="realCarousel" autoplay>
                {[1, 2, 3, 4, 5, 6, 7].map((element, index) => {
                    const imagePath = "images/NMIMS/" + element + ".jpeg";
                    return (
                        <div key={3}>
                            <div
                                className="carouselDiv"
                                style={{
                                    backgroundImage: `url(${imagePath})`,
                                    height: "50vh",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};


export default function ImagesCarousel() {
    return NMIMSCarousel();
}

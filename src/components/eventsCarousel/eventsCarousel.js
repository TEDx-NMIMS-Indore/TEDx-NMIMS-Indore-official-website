import { Carousel } from "antd";
// import "antd/dist/antd.css";

import "./eventsCarousel.scss";

const CampusCarousel = (
    <>
        {Array.from({ length: 7 }, (_, index) => index + 1).map(
            (element, index) => {
                return (
                    <div
                        className="carouselDiv"
                        style={{
                            backgroundImage:
                                "url(images/NMIMS"+element+".jpeg)",
                            height: "60vh",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    ></div>
                );
            }
        )}
    </>
);

export default function EventsCarousel() {
    return (
        <div className="carouselBackground">
            <Carousel autoplay>
                {/* <div> */}
                <div>
                    {CampusCarousel}
                </div>
            </Carousel>
        </div>
    );
}

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./TEDxNMIMSCarousel.scss";
export default function TEDxNMIMSCarousel() {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            className="TEDxNMIMScarousel"
        >
            <div className="imageDiv">
                <img
                    src="images/PastTEDx/1.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
            <div className="imageDiv">
                <img
                    src="images/PastTEDx/2.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
            <div className="imageDiv">
                <img
                    src="images/PastTEDx/3.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
            <div className="imageDiv">
                <img
                    src="images/PastTEDx/4.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
            <div className="imageDiv">
                <img
                    src="images/PastTEDx/5.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
            <div className="imageDiv">
                <img
                    src="images/PastTEDx/6.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
        </Carousel>
    );
}

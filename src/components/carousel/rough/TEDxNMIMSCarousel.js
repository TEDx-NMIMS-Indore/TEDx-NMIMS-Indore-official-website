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
                    src="images/PastTEDx/IMG_1576.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
            <div className="imageDiv">
                <img
                    src="images/PastTEDx/IMG_1584.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
            <div className="imageDiv">
                <img
                    src="images/PastTEDx/IMG_1594.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
            <div className="imageDiv">
                <img
                    src="images/PastTEDx/IMG_1601.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
            <div className="imageDiv">
                <img
                    src="images/PastTEDx/IMG_1612.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
            <div className="imageDiv">
                <img
                    src="images/PastTEDx/IMG_1638.webp"
                    decoding="async"
                    alt="Previous TEDx pics"
                />
            </div>
        </Carousel>
    );
}

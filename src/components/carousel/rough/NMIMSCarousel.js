import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./NMIMSCarousel.scss";

export default function NMIMSCarousel() {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} className="NMIMSCarousel">
            <div>
                <img
                    loading="lazy"
                    alt="NMIMS, Indore campus images"
                    decoding="async"
                    src="images/NMIMS/1.webp"
                />
            </div>
            <div>
                <img
                    loading="lazy"
                    alt="NMIMS, Indore campus images"
                    decoding="async"
                    src="images/NMIMS/2.webp"
                />
            </div>
            <div>
                <img
                    loading="lazy"
                    alt="NMIMS, Indore campus images"
                    decoding="async"
                    src="images/NMIMS/3.webp"
                />
            </div>
            <div>
                <img
                    loading="lazy"
                    alt="NMIMS, Indore campus images"
                    decoding="async"
                    src="images/NMIMS/4.webp"
                />
            </div>

            <div>
                <img
                    loading="lazy"
                    alt="NMIMS, Indore campus images"
                    decoding="async"
                    src="images/NMIMS/6.webp"
                />
            </div>
        </Carousel>
    );
}

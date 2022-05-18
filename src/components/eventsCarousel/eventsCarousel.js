import { Carousel } from "antd";
import "./eventsCarousel.scss";

const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

export default function EventsCarousel() {
    return (
        <div className="carouselBackground">
            <Carousel autoplay>
                {/* <div> */}
                <div>
                    <div className="carouselDiv" style={{backgroundImage: 'url(images/PastTEDx/IMG_1576.JPG)', height: "60vh", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    </div>
                </div>
                <div>
                    <div className="carouselDiv" style={{backgroundImage: 'url(images/PastTEDx/IMG_1584.JPG)', height: "60vh", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    </div>
                </div>
                <div>
                    <div className="carouselDiv" style={{backgroundImage: 'url(images/PastTEDx/IMG_1594.JPG)', height: "60vh", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    </div>
                </div>
                <div>
                    <div className="carouselDiv" style={{backgroundImage: 'url(images/PastTEDx/IMG_1601.JPG)', height: "60vh", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    </div>
                </div>
                <div>
                    <div className="carouselDiv" style={{backgroundImage: 'url(images/PastTEDx/IMG_1612.JPG)', height: "60vh", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    </div>
                </div>
                <div>
                    <div className="carouselDiv" style={{backgroundImage: 'url(images/PastTEDx/IMG_1638.JPG)', height: "60vh", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

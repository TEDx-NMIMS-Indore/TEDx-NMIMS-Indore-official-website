import "../sponsors.scss";

export default function Sponsors2022() {
    return (
        <div className="masterDiv">
            <h1>Our Sponsors '22</h1>
            <div className="sponsorsMainDiv">
                <div className="sponsorCategory">
                    <img
                        loading="lazy"
                        decoding="async"
                        src="/images/fhi-logo-primary.webp"
                        alt="Lotus electronics logo"
                    />
                </div>
                <div className="sponsorCategory">
                    <img
                        loading="lazy"
                        decoding="async"
                        src="/images/Just-Corseca.webp"
                        alt="Just Corseca logo"
                    />
                </div>
                <div className="sponsorCategory">
                    <img
                        loading="lazy"
                        decoding="async"
                        src="/images/haier.webp"
                        alt="Haier logo"
                    />
                </div>
            </div>
        </div>
    );
}

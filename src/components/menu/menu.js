import "./menu.scss";

export default function Menu() {
    function scroll(pages) {
        window.scrollTo(0, window.innerHeight*pages);
    }
    return (
        <div className="menuDiv">
            <a href="/">
                <img src="images/TedxLogo.jpeg" alt="TEDxNMIMSIndore Logo" />
            </a>
            <div className="menuItem" onClick={(e) => scroll(0)}>
                Home
            </div>
            <div className="menuItem" onClick={(e) => scroll(1)}>
                About
            </div>
            <div className="menuItem" onClick={(e) => scroll(3.1)}>
                Team
            </div>
            <div className="menuItem" onClick={(e) => scroll(8.3)}>
                Speakers 2019
            </div>
            <div className="menuItem" onClick={(e) => scroll(12.3)}>
                Contact
            </div>
        </div>
    );
}

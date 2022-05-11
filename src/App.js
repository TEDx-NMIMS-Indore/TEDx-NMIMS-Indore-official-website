import "./App.css";
import Heading from "./components/homepage/title";
import MenuItem from "./components/homepage/Menu";
import AboutNMIMS from "./components/aboutNMIMS/aboutNMIMS";
import AboutTed from "./components/aboutTed/aboutTedPage1";
import TedxNMIMS from "./components/aboutTEDxNMIMS/tedxNMIMS";
import ContactPage from "./components/contactPage/contactPage";
import { BackTop, Tooltip } from "antd";

console.log("%cTEDxNMIMS, Indore", "font-size: 3vw; font-weight: 900; color: red")

console.log(
    "%cWelcome to TEDxNMIMS official website. \n\nThis website has been made by Mr. Sam Varghese, currently a second year MBATech student at NMIMS, Indore. \nGitHub link for the website: https://github.com/TEDx-NMIMS-Indore/TEDx-NMIMS-Indore-official-website \nProfile Sam Varghese: https://www.linkedin.com/in/sam-varghese-1a7701209/",
    "color: gold"
);

function App() {
    return (
        <div className="headingPage">
            <Tooltip placement="topLeft" title="Back to top" color="blue">
                <BackTop className="backToTop" />
            </Tooltip>
            <MenuItem />
            <Heading />
            <AboutNMIMS />
            <AboutTed />
            <TedxNMIMS />
            <ContactPage />
        </div>
    );
}

export default App;

import "./App.css";
import Heading from "./components/homepage/title";
import MenuItem from "./components/homepage/Menu";
import AboutNMIMS from "./components/aboutNMIMS/aboutNMIMS";
import AboutTed from "./components/aboutTed/aboutTedPage1";
import TedxNMIMS from "./components/aboutTEDxNMIMS/tedxNMIMS";
import ContactPage from "./components/contactPage/contactPage";
import { BackTop } from "antd";
function App() {
    return (
        <div className="headingPage">
            <BackTop 
                className="backToTop"
                title="Back to top"
            />
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

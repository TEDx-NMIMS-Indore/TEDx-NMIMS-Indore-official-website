import "./App.css";
import Heading from "./components/homepage/title";
import MenuItem from "./components/homepage/Menu";
import AboutNMIMS from "./components/aboutNMIMS/aboutNMIMS";
import AboutTed from "./components/aboutTed/aboutTedPage1";
import TedxNMIMS from "./components/aboutTEDxNMIMS/tedxNMIMS";

function App() {
    return (
        <div className="headingPage">
            <MenuItem />
            <Heading />
            <AboutNMIMS />
            <AboutTed />
            <TedxNMIMS />
        </div>
    );
}

export default App;

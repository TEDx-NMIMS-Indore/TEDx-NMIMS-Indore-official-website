import "./App.css";
import Heading from "./components/homepage/title";
import MenuItem from "./components/homepage/Menu";
import AboutNMIMS from "./components/aboutNMIMS/aboutNMIMS";
import AboutTed from "./components/aboutTed/aboutTedPage1";
import TedxNMIMS from "./components/aboutTEDxNMIMS/tedxNMIMS";
import ContactPage from "./components/contactPage/contactPage";
import { BackTop, Tooltip } from "antd";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Some secret console text to showcase the name of contributors :)

console.log(
    "%cTEDxNMIMS, Indore",
    "font-size: 3vw; font-weight: 900; color: red; background-color: black; padding: 2vw; margin: 1vw; display: flex; justify-content: center"
);

console.log(
    "%cWelcome to TEDxNMIMS official website. \n\nThis website has been made by Mr. Sam Varghese, currently a second year MBATech student at NMIMS, Indore. \nGitHub link for the website: https://github.com/TEDx-NMIMS-Indore/TEDx-NMIMS-Indore-official-website \nProfile Sam Varghese: https://www.linkedin.com/in/sam-varghese-1a7701209/ \nMail ID of Sam Varghese: sam.varg.2003@gmail.com",
    "color: yellow; background-color: black; padding: 1vw;"
);

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/abs" element={<MenuItem />}></Route>
                <Route
                    exact
                    path="/"
                    element={
                        <div className="headingPage">
                            <Tooltip
                                placement="topLeft"
                                title="Back to top"
                                color="blue"
                            >
                                <BackTop className="backToTop" />
                            </Tooltip>
                            <MenuItem />
                            <Heading />
                            <AboutNMIMS />
                            <AboutTed />
                            <TedxNMIMS />
                            <ContactPage />
                        </div>
                    }
                ></Route>
                <Route
                    path="*"
                    exact={true}
                    element={
                            <PageNotFound />
                    }
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
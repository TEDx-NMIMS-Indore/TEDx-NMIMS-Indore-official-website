import "./App.css";
import Heading from "./components/homepage/title";
import Menu from "./components/menu/menu";
import AboutNMIMS from "./components/aboutNMIMS/aboutNMIMS";
import Sponsors2019 from "./components/sponsors/sponsors2019/sponsors2019";
import TedxNMIMS from "./components/aboutTEDxNMIMS/tedxNMIMS";
import TEDxNMIMSCarousel from "./components/carousel/rough/TEDxNMIMSCarousel";
import NMIMSCarousel from "./components/carousel/rough/NMIMSCarousel";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import ContactPage from "./components/contactPage/contactPage";
import Speakers from "./components/speakers/speakers";

import Team from "./components/TEDTeam/TEDTeam";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Some secret console text to showcase the name of contributors :)

console.log(
    "%cTEDxNMIMS, Indore",
    "font-size: 3vw; font-weight: 900; color: red; background-color: black; padding: 2vw; margin: 1vw; display: flex; justify-content: center"
);

console.log(
    "%cWelcome to TEDxNMIMS official website. \n\nThis website has been made by Mr. Sam Varghese, currently a second year MBATech student at NMIMS, Indore. \nGitHub link for the website: https://github.com/TEDx-NMIMS-Indore/TEDx-NMIMS-Indore-official-website \nProfile Sam Varghese: https://www.linkedin.com/in/sam-varghese-1a7701209/ \nMail ID of Sam Varghese: sam.varg.2003@gmail.com",
    "color: yellow; background-color: black; padding: 1vw;"
);

// Decode it if you can :)

console.log(
    `%c- .- .-.. . -. - / .... .. - ... / .- / - .- .-. --. . - / -. --- / --- -. . / . .-.. ... . / -.-. .- -. / .... .. - -.-.-. / --. . -. .. ..- ... / .... .. - ... / .- / - .- .-. --. . - / -. --- / --- -. . / . .-.. ... . / -.-. .- -. / ... . . .-.-.- / -.-. --- -. --. .-. .- - ..- .-.. .- - .. --- -. ... / --- -. / -.. . -.-. --- -.. .. -. --. / - .... . / ... . -.-. .-. . - / -.-. --- -.. . .-.-.- / -.-- --- ..- .----. .-. . / .- -- .- --.. .. -. --. -.-.--`,
    "color: cyan; background-color: black"
);

const App = () => {
    return (
        <Router>
            {/* <Menu /> */}
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <div className="headingPage">
                            {/* <Tooltip
                                placement="topLeft"
                                title="Back to top"
                                color="grey"
                            >
                                <BackTop />
                            </Tooltip> */}
                            <Menu />
                            <Heading />
                            <NMIMSCarousel />
                            <AboutNMIMS />
                            <TEDxNMIMSCarousel />
                            <TedxNMIMS />
                            <Team />
                            <Speakers />
                            <ContactPage />
                        </div>
                    }
                />
                {/* 404 Page */}
                <Route
                    path="*"
                    exact={true}
                    element={
                        <div>
                            <PageNotFound />
                        </div>
                    }
                ></Route>
                {/* Sponsors page */}
                <Route
                    path="/sponsors"
                    exact={true}
                    element={
                        <div>
                            <Menu forPage="newPage"/>
                            <Sponsors2019 />
                        </div>
                    }
                ></Route>
            </Routes>
        </Router>
    );
};

export default App;

//$ Morse

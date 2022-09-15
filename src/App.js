import "./App.css";
import Heading from "./components/homepage/title";
import Menu from "./components/menu/menu";
import AboutNMIMS from "./components/aboutNMIMS/aboutNMIMS";
import Sponsors2019 from "./components/sponsors/sponsors2019/sponsors2019";
import Sponsors2022 from "./components/sponsors/sponsors2022/sponsors2022";
import TedxNMIMS from "./components/aboutTEDxNMIMS/tedxNMIMS";
import TEDxNMIMSCarousel from "./components/carousel/rough/TEDxNMIMSCarousel";
import NMIMSCarousel from "./components/carousel/rough/NMIMSCarousel";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import ContactPage from "./components/contactPage/contactPage";
import Speakers from "./components/speakers/speakers";
import Speakers2022 from "./components/speakers/speakers2022";
import Team from "./components/TEDTeam/TEDTeam";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Some secret console text to showcase the name of contributors :)

console.log(
    "%cTEDxNMIMSIndore",
    "font-size: 3vw; font-weight: 900; color: red; background-color: black; padding: 2vw; margin: 1vw; display: flex; justify-content: center"
);

console.log(
    "%cWelcome to TEDxNMIMS official website. \n\nThis website has been made by Mr. Sam Varghese, currently a second year MBATech student at NMIMS, Indore. \nGitHub link for the website: https://github.com/TEDx-NMIMS-Indore/TEDx-NMIMS-Indore-official-website \nProfile Sam Varghese: www.linkedin.com/in/sam-varghese2003 \nMail ID of Sam Varghese: sam.varghese208@nmims.edu.in",
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
                            <Menu />
                            <Heading />
                            <NMIMSCarousel />
                            <AboutNMIMS />
                            <TEDxNMIMSCarousel />
                            <TedxNMIMS />
                            <Team />
                            <Speakers2022 />
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
                            <Menu />
                            <PageNotFound />
                        </div>
                    }
                ></Route>
                {/* Speakers page */}
                <Route
                    path="/speakers2019"
                    exact={true}
                    element={
                        <div>
                            <Menu forPage="newPage" />
                            <div style={{paddingTop: "13vh", backgroundColor: "white"}}>
                                <Speakers />
                            </div>
                        </div>
                    }
                ></Route>
                <Route
                    path="/speakers2022"
                    exact={true}
                    element={
                        <div>
                            <Menu forPage="newPage" />
                            <div style={{paddingTop: "13vh", backgroundColor: "white"}}>
                                <Speakers2022 />
                            </div>
                        </div>
                    }
                ></Route>
                {/* Team page */}
                <Route
                    
                    path="/team"
                    exact={true}
                    element={
                        <div>
                            <Menu forPage="newPage" />
                            <div style={{paddingTop: "13vh", backgroundColor: "white"}}>
                                <Team />
                            </div>
                        </div>
                    }
                ></Route>
                {/* Contact page */}
                <Route
                    path="/contact"
                    exact={true}
                    element={
                        <div>
                            <Menu forPage="newPage" />
                            <div style={{paddingTop: "13vh", backgroundColor: "white"}}>
                                <ContactPage />
                            </div>
                        </div>
                    }
                ></Route>
                {/* Sponsors page */}
                <Route
                    path="/sponsors2019"
                    exact={true}
                    element={
                        <div>
                            <Menu forPage="newPage" />
                            <div style={{paddingTop: "13vh", backgroundColor: "white"}}>
                                <Sponsors2019 />
                            </div>
                        </div>
                    }
                ></Route>
                <Route
                    path="/sponsors2022"
                    exact={true}
                    element={
                        <div>
                            <Menu forPage="newPage" />
                            <div style={{paddingTop: "13vh", backgroundColor: "white"}}>
                                <Sponsors2022 />
                            </div>
                        </div>
                    }
                ></Route>
            </Routes>
        </Router>
    );
};

export default App;

//$ Morse

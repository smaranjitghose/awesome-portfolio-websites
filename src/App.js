import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Research from "./pages/Research/Research";
import Navbar from "./components/Navbar/Navbar";
import Education from "./pages/Education/Education";
import Resume from "./pages/Resume/Resume";
import Reference from "./pages/References/Reference";
import NotFound from "./pages/404/404";
import Footer from "./components/Footer/Footer";
import Design from "./pages/Design/Design";
import { Helmet } from "react-helmet";
import ImageTemplate from "./pages/Design/imageTemplate";
import u from "./assets/images/design-page/ui_ux/1.svg";
import u2 from "./assets/images/design-page/ui_ux/2.svg";
import u3 from "./assets/images/design-page/ui_ux/3.svg";
import u4 from "./assets/images/design-page/ui_ux/4.svg";
import u5 from "./assets/images/design-page/ui_ux/5.svg";
import u6 from "./assets/images/design-page/ui_ux/6.svg";
import u7 from "./assets/images/design-page/ui_ux/7.svg";
import u8 from "./assets/images/design-page/ui_ux/8.svg";
import m1 from "./assets/images/design-page/mockups/1.svg";
import m2 from "./assets/images/design-page/mockups/2.svg";
import m3 from "./assets/images/design-page/mockups/3.svg";
import m4 from "./assets/images/design-page/mockups/4.svg";
import m5 from "./assets/images/design-page/mockups/5.svg";
import m6 from "./assets/images/design-page/mockups/6.svg";
import m7 from "./assets/images/design-page/mockups/7.svg";
import m8 from "./assets/images/design-page/mockups/8.svg";

function App() {
  const [originalTitle, setOriginalTitle] = useState();
  const [originalFavicon, setOriginalFavicon] = useState();

  function getFaviconEl() {
    return document.getElementById("favicon");
  }

  useEffect(() => {
    const handleTabChange = () => {
      if (document.hidden) {
        document.title = "Come back";
        const favicon = getFaviconEl();
        favicon.href = "folded.ico";
      } else {
        document.title = originalTitle;
        const favicon = getFaviconEl();
        favicon.href = originalFavicon;
      }
    };

    if (!originalTitle) {
      setOriginalTitle(document.title);
    }
    if (!originalFavicon) {
      const favicon = getFaviconEl();
      setOriginalFavicon(favicon.href);
    }
    window.addEventListener("visibilitychange", handleTabChange);
    return () =>
      window.removeEventListener("visibilitychange", handleTabChange);
  }, [originalTitle, originalFavicon]);
  return (
    <>
      <div className="App">
        <Helmet>
          <title>John Doe | Home</title>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="keywords"
            content="free portfolio template,portfolio template, portfolio website template, open source, open sourcing, contributing to open source"
          />
          <meta
            name="description"
            content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
          />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="AdsBot-Google" content="index,follow" />
          <meta
            property="og:site_name"
            content="https://portfolio.smaranjitghose.codes/"
          />
          <meta property="og:title" content="John Doe | Home" />
          <meta
            property="og:description"
            content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://portfolio.smaranjitghose.codes/"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="John Doe | Home" />
          <meta
            name="twitter:description"
            content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
          />
          <meta
            name="twitter:url"
            content="https://portfolio.smaranjitghose.codes/"
          />
          <meta name="application-name" content="John Doe | Home" />
          <meta name="apple-mobile-web-app-title" content="John Doe | Home" />
          <meta
            name="summary"
            content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
          />
        </Helmet>
        <Navbar />
        <Switch>
          <Route path="/design" component={Design} />
          <Route exact path="/" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/education" component={Education} />
          <Route path="/research" component={Research} />
          <Route path="/resume" component={Resume} />
          <Route path="/reference" render={Reference} />
          <Route path="/uiux" component={() => <ImageTemplate image={u} />} />
          <Route path="/uiux2" component={() => <ImageTemplate image={u2} />} />
          <Route path="/uiux3" component={() => <ImageTemplate image={u3} />} />
          <Route path="/uiux4" component={() => <ImageTemplate image={u4} />} />
          <Route path="/uiux5" component={() => <ImageTemplate image={u5} />} />
          <Route path="/uiux6" component={() => <ImageTemplate image={u6} />} />
          <Route path="/uiux7" component={() => <ImageTemplate image={u7} />} />
          <Route path="/uiux8" component={() => <ImageTemplate image={u8} />} />
          <Route path="/mock" component={() => <ImageTemplate image={m1} />} />
          <Route path="/mock2" component={() => <ImageTemplate image={m2} />} />
          <Route path="/mock3" component={() => <ImageTemplate image={m3} />} />
          <Route path="/mock4" component={() => <ImageTemplate image={m4} />} />
          <Route path="/mock5" component={() => <ImageTemplate image={m5} />} />
          <Route path="/mock6" component={() => <ImageTemplate image={m6} />} />
          <Route path="/mock7" component={() => <ImageTemplate image={m7} />} />
          <Route path="/mock8" component={() => <ImageTemplate image={m8} />} />
          <Route path="" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;

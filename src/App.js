import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Research from './pages/Research/Research'
import Navbar from './components/Navbar/Navbar';
import Education from './pages/Education/Education'
import Resume from './pages/Resume/Resume';
import References from './pages/References/References';
import NotFound from './pages/404/404';
import Footer from './components/Footer/Footer';
import Design from './pages/Design/Design'
import { Helmet } from "react-helmet";


function App() {
  return (
    <>
      <div className="App">
        <Helmet>
          <title>John Doe | Home</title>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="keywords" content="free portfolio template,portfolio template, portfolio website template, open source, open sourcing, contributing to open source" />
          <meta name="description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="AdsBot-Google" content="index,follow" />
          <meta property="og:site_name" content="https://portfolio.smaranjitghose.codes/"/>
          <meta property="og:title" content="John Doe | Home"/>
          <meta property="og:description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://portfolio.smaranjitghose.codes/" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="John Doe | Home" />
          <meta name="twitter:description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
          <meta name="twitter:url" content="https://portfolio.smaranjitghose.codes/" />
          <meta name="application-name" content="John Doe | Home" />
          <meta name="apple-mobile-web-app-title" content="John Doe | Home" />
          <meta name="summary" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
        </Helmet>
        <Navbar />
        <Switch>
          <Route path='/design' component={Design} />
          <Route exact path='/' component={Home} />
          <Route path='/experience' component={Experience} />
          <Route path='/projects' component={Projects} />
          <Route path='/education' component={Education} />
          <Route path='/research' component={Research} />
          <Route path='/resume' component={Resume} />
          <Route path='/references' component={References} />
          <Route path='' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;

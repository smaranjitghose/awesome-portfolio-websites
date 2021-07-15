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
import NotFound from './pages/404/404';
import Footer from './components/Footer/Footer';
import { Helmet } from "react-helmet";


function App() {
  return (
    <>
      <div className="App">
        <Helmet>
          <meta name="description" content="portfolio website" />
          <meta name="keywords" content="portfolio, website, developer, researcher, designer, open source"/>
        </Helmet>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/experience' component={Experience} />
          <Route path='/projects' component={Projects} />
          <Route path='/education' component={Education} />
          <Route path='/research' component={Research} />
          <Route path='' component={NotFound} />
          <Route path='/resume' component={Resume} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;

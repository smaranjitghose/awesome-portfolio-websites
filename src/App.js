import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Research from './pages/Research/Research'
import Navbar from './components/Navbar/Navbar';
import Education from './pages/Education/Education'
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} exact={true} />
        <Route path='/experience' component={Experience} />
        <Route path='/projects' component={Projects} />
        <Route path='/education' component={Education} />
        <Route path='/research' component={Research} />
        <Route path='/resume' component={Resume}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

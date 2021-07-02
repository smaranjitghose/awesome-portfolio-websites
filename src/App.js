import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Research from './components/Research/Research'
import Navbar from './components/Navbar/Navbar';
import Education from './components/Education/Education'
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} exact={true} />
        <Route path='/experience' component={Experience} />
        <Route path='/projects' component={Projects}/>
        <Route path='/education' component={Education}/>
        <Route path='/research' component={Research}/>
        <Route path='/resume' component={Resume}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

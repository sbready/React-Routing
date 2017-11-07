import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import FAQ from './components/About/FAQ/FAQ.js';
import Company from './components/About/Company/Company.js';
import People from './components/People/People.js';
import Character from './components/Character/Character.js';
import Missing from './components/Missing/Missing.js';

export default (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/people'>People</Link>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' render={() => {
          return (
            <About>
              <Switch>
                <Route path='/about/faq' component={FAQ}/>
                <Route path='/about/company' component={Company}/>
              </Switch>
            </About>
          )
        }} />
        <Route path='/people/:id' component={Character}/>
        <Route path='/people' component={People}/>
        <Route component={Missing}/>
      </Switch>

  </div>
  )

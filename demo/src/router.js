import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import Company from './components/About/Company/Company';
import FAQ from './components/About/FAQ/FAQ';
import People from './components/People/People';
import Character from './components/Character/Character';
import Missing from './components/Missing/Missing';
// TODO Pull routes out of the App Componenet
// This will clean up our App and make it more obvious
// Where our routes are being defined.

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/contact' component={Contact} />
    <Route path='/about' render={() => (
      <About>
        <Route path='/about/company' component={Company} />
        <Route path='/about/faq' component={FAQ} />
      </About>
    )} />
    <Route path='/people/:id' component={Character} />
    <Route path='/people' component={People} />
    <Route path='/' component={Missing} />
  </Switch>
)

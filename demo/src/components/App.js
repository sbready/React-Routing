import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import router from '../router.js';

class App extends Component {
  render() {
    return (
      <div>
        {/* TODO Build Routing inside our App */}
        <nav>
          <NavLink exact activeClassName='selected-link' to='/'>Home</NavLink>
          <NavLink activeClassName='selected-link' to='/contact'>Contact Us</NavLink>
          <NavLink activeClassName='selected-link' to='/about'>About Us</NavLink>
          <NavLink activeClassName='selected-link' to='/people'>Math People</NavLink>
        </nav>
        { router }
      </div>
    );
  }
}

export default App;

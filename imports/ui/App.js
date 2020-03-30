
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Org from './orgview.js';
import Volunteer from './volunteer.js';
import Results from './search.js';

export default class App extends Component {
  render(){
    return(
    <div>
      <p className='small'>Everyone wants to contribute their share to the global fight against COVID-19. 
      But the overwhelming organizations/fundraisers/community efforts can lead to inaction. 
      This is a quick way of finding the best way you can help. </p>
    <Router>
      <div>
      <Link to='/' className="vollink">I can help</Link>
      <Link to='/organization' className="orglink">I need help</Link>
      <Switch>
      <Route path="/" exact component={Volunteer} />
      <Route path="/results" exact component={Results} />
      <Route path="/organization" exact component={Org} />
      </Switch>
      </div>
    </Router>
    </div>
    )}

}

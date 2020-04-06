
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Org from './orgview.js';
import Volunteer from './volunteer.js';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      org: false,
    }
    this.toOrg = this.toOrg.bind(this);
    this.toVol = this.toVol.bind(this);
  };
  toOrg(){
    this.setState({
      org:false
    });
  }
  toVol(){
    this.setState({
      org:true
    })
  }
  
  render(){
    return(
      <div>
    <Router>
      <div className = 'router'>
      {this.state.org? <Link to='/' className="vollink link" onClick={this.toOrg}>I want to help</Link>:
      <Link to='/organization' className="orglink link" onClick={this.toVol}>I'm looking for help</Link> }
      <Switch className="full">
      <Route path="/" exact component={Volunteer} />
      <Route path="/organization" exact component={Org} />
      </Switch>
      </div>
    </Router>
      <div className='small'>
        <p>A global disaster is overwhelming. We're so glad you're in a position to help and we want to guide you straight to the action page.</p>
      </div>

    </div>
    )}

}

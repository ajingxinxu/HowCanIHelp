import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Organizations } from '../api/organizations.js';

import Result  from './results.js';

class Search extends Component {

    renderResults() {
        return this.props.results.map((result) => (
          <Result key={result._id} result={result} />
        ));
      }
    render() {
        return (
            <ul>
               {this.renderResults()}
            </ul>
        )
    }
}



  export default withTracker(props => {
    return {
      results: Organizations.find({location: props.location}).fetch(),
    };
  })(Search);
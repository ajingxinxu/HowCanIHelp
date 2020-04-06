import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Organizations } from '../api/organizations.js';

import Result  from './results.js';

class Search extends Component {

    renderResults() {
      console.log(
        this.props.location, 
        this.props.time,
        this.props.money,
        this.props.internet,
        this.props.car,
        this.props.social,
        this.props.supplies,
        this.props.method,
        this.props.tech);
        return this.props.results.map((result) => (
          <Result key={result._id} result={result} />
          
        ));
    }
    renderSecondaryResults() {
        return this.props.secondaryresults.map((result) => (
          <Result key={result._id} result={result} />
        ));
    }
    render() {
        return (
            <ul>
               {this.renderResults()}
               {this.renderSecondaryResults()}
            </ul>
        )
    }
}



  export default withTracker(props => {
    if (props.method == '1') {
      return {
        results: Organizations.find({
          location: props.location,
          time:props.time,
        }).fetch(),

        secondaryresults: Organizations.find({
          location:props.location,
          money:props.money
        }).fetch()
      }
    }
    else if (props.internet == 'true') {
      if (props.car == 'true'){
        if (props.supplies == 'true'){
          if(props.social == 'true'){
            if(props.tech == 'true'){
              return {
                results: Organizations.find({
                  method: props.method,
                }).fetch(),
              }
            }
            return {
              results: Organizations.find({
                method: props.method,
                tech:props.tech,
              }).fetch(),
            }
          }
          return {
            results: Organizations.find({
              method: props.method,
              social: props.social,
            }).fetch(),
          }
        }
        return {
          results: Organizations.find({
            method: props.method,
            supplies:props.supplies,
          }).fetch(),
        }
      }
      return {
        results: Organizations.find({
          method: props.method,
          car:props.car,
        }).fetch(),
      }
    }

    return {
      results: Organizations.find({
          method: props.method, 
          internet: props.internet, 
          }).fetch(),
      secondaryresults: Organizations.find({
          money: props.money,
      }).fetch(),
    };
    
  })(Search);
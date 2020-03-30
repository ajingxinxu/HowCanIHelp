import React, { Component } from 'react';

 
export default class Result extends Component {
  render() {
    return (
      <li>
          <a href = {this.props.result.url}>{this.props.result.name}</a></li>
    );
  }
}



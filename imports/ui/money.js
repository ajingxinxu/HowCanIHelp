import React, { Component } from 'react';
 
export default class Money extends Component {
  render() {
    return (
      <div className = 'money'>
            <div className = 'arrow0' style='background-image:url("./images/arrow0.png")'>
            </div>

            <h1>I'm best positioned to volunteer my:</h1>
            <p>Time</p>
            <input></input>
            <p>Money</p>
            <input></input>

            <p>Everyone can contribute to the fight against global disaster in their own way. We’re so glad you’re here. </p>
        </div>
    );
  }
}
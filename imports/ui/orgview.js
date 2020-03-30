
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Organizations } from '../api/organizations.js';


export default class Org extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
    const url = ReactDOM.findDOMNode(this.refs.urlInput).value.trim();
    const location = ReactDOM.findDOMNode(this.refs.locationInput).value.trim();
    const method = ReactDOM.findDOMNode(this.refs.methodInput).value.trim();
    const internet = ReactDOM.findDOMNode(this.refs.internetInput).value.trim();
    const car = ReactDOM.findDOMNode(this.refs.carInput).value.trim();
    const supplies = ReactDOM.findDOMNode(this.refs.suppliesInput).value.trim();
    const social = ReactDOM.findDOMNode(this.refs.socialInput).value.trim();
    const tech = ReactDOM.findDOMNode(this.refs.techInput).value.trim();
    const min_time = ReactDOM.findDOMNode(this.refs.min_timeInput).value.trim();
    const max_time = ReactDOM.findDOMNode(this.refs.max_timeInput).value.trim();
    const money = ReactDOM.findDOMNode(this.refs.moneyInput).value.trim();
    
    Organizations.insert({
      name, url, location, method, internet, car, supplies, social, tech, min_time, max_time, money,createdAt: new Date(),
    });


    ReactDOM.findDOMNode(this.refs.nameInput).value = '';
  }


  render() {
    return (
      <div className="container">
        <header>
          
          <h1>Broadcast your effort to the millions who're self-isolating but want to help!</h1>

          <form className="organization-form" onSubmit={this.handleSubmit.bind(this)} >
          <div className ='flex'>
          <div className = 'ov'>
            <label> Name of your effort <input
                type="text"
                ref="nameInput"
                placeholder="Please keep to less than 10 words!"
            />
            </label>
            <label> Link <input
                type="text"
                ref="urlInput"
                placeholder="URL of volunteer signup/donation/action form"
            />            
            </label>
            <label> Your location <input
                type="text"
                ref="locationInput"
                placeholder="New York City, NY, US"
            />
            </label>
          
              <label> You primarily <select
                ref = 'methodInput'>
                    <option selected value="aid">Aid medical efforts </option>
                    <option value="1">Answer local communities' needs</option>
                    <option value="spread">Research / Prevent further spread</option>
              </select>
              </label>
              </div>
              <div className = 'ov'>
              
            <label> You need volunteers with access to: <label></label>
              <div className='flexleft'>
                <div className='child'>
              <label className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    ref='internetInput'
                    value='true'
                />The internet
              </label>
              <label  className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    ref='carInput'
                    value='true'
                />Car
              </label>
              <label className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    ref='suppliesInput'
                    value='true'
                />Supplies
              </label>
              </div>
              <div className='child'>
              <label className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    ref='socialInput'
                    value='true'
                />Social platform / network
              </label>
              <label className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    ref='techInput'
                    value='true'
                />
                Tech skills
              </label>
              </div>
              </div>
             
            </label>
            <label> You're looking for individuals who can volunteer between
            <input className = 'time'
                type="text"
                ref="min_timeInput"
                placeholder="2 hours / week"
            />            
            and <input className = 'time'
                type="text"
                ref="max_timeInput"
                placeholder="40 hours / week"
            />.            
            </label>
            <label> You're looking for individuals who can donate around <input className='time'
                type="text"
                ref="moneyInput"
                placeholder="$50 USD"
            />.
            </label>
            
            
            </div>
            </div>
            <input type="submit" value="Submit" className='submit'/>
          </form>

        </header>

      </div>
     );
   }
 }

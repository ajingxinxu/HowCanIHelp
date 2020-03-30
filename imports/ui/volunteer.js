import React, { Component } from 'react';
import Search from './search.js';



export default class Volunteer extends Component {
    constructor() {
        super()
        this.state = {
            time: 2,
            money: 40,
            location: '',
            method:'',
            internet: false,
            car: false,
            supplies: false,
            social: false,
            tech: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
      
      handleChange (evt) {
          this.setState({ [evt.target.ref]: evt.target.value });
      }

      onSubmit(evt) {
        event.preventDefault();
        alert("Oops, we're trying to get more organizations to tell us what they need help with!")

      }


    render(){
        return (
            <div className='volunteer'>
            <form className="volunteer-form" onSubmit={this.onSubmit} >
            <h1>I can give my:</h1>
                    <label> Time
                    <input 
                    id="typeinp" 
                    ref='time'
                    type="range" 
                    min="0" max="10" 
                    
                    onChange={this.handleChange}
                    value={this.state.time} 
                    step="1"/>
                    {this.state.time} Hour(s)
                </label>
                    <label> Money
                    <input 
                    id="typeinp" 
                    ref='money'
                    type="range" 
                    min="0" max="200" 
                    value={this.state.money} 
                    onChange={this.handleChange}
                    step="20"/>
                    ${this.state.money} USD
                </label>

            <h1>I care most about:</h1>
                    <select
                        ref = 'method'
                        onChange = {this.handleChange} 
                        value = {this.state.value}>
                    
                    <option selected value="aid">Aid medical efforts </option>
                    <option value="1">Answer local communities' needs</option>
                    <option value="spread">Research / Prevent further spread</option>
              </select>


            <h1>My location:</h1>
            <input
                type="text"
                ref="location"
                placeholder="New York City, NY, US"
                onChange = {this.handleChange}
                value = {this.state.location}
            />
            <h1>I have access to:</h1>
              <div className='flexleft'>
                <div className='child'>
              <label className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    ref='internet'
                    value={this.state.internet}
                    onChange = {this.handleChange}
                />The internet
              </label>
              <label  className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    ref='car'
                    value={this.state.car}
                    onChange = {this.handleChange}
                />Car
              </label>
              <label className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    ref='supplies'
                    value={this.state.supplies}
                    onChange = {this.handleChange}
                />Supplies
              </label>
              </div>
              <div className='child'>
              <label className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    ref='social'
                    value={this.state.social}
                    onChange = {this.handleChange}
                />Social platform / network
              </label>
              <label className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    ref='tech'
                    value={this.state.tech}
                    onChange = {this.handleChange}
                />
                Tech skills
              </label>
              </div>
              </div>

            <input type="submit" value="Search" className='search'/>
          </form>
            </div>
        )
    }
}



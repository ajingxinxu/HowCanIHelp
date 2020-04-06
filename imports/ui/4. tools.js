import React, {Component } from 'react';
import Volunteer from './volunteer.js';
import { Redirect } from 'react-router';


export default class Tools extends Component {
    constructor() {
        super()
        this.state = {
            internet: false,
            car: false,
            supplies: false,
            social: false,
            tech: false,
            redirect:false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    handleChange(evt){
        this.setState({ [evt.target.ref]: evt.target.value});
    }

    onSubmit(evt){
        evt.preventDefault();
        return <Volunteer internet={this.state.internet}/>
    }





    render() {
        if (this.state.redirect) {
            return <Redirect push to="/" />;
            
          }
          console.log(this.state.redirect);
        return (
            <form onSubmit={this.onSubmit}>
                <h1 >I have access to:</h1>
                <div className='flexleft'>
                    <div className='child'>
                        <label className='checkbox'> 
                            <input className='checkbox'
                                type= 'checkbox'
                                name='internet'
                                value={this.state.internet}
                                onChange = {this.handleChange}
                            />The internet
                        </label>
                        <label  className='checkbox'> 
                            <input className='checkbox'
                                type= 'checkbox'
                                name='car'
                                value={this.state.car}
                                onChange = {this.handleChange}
                            />Car
                        </label>
                        <label className='checkbox'> 
                            <input className='checkbox'
                                type= 'checkbox'
                                name='supplies'
                                value={this.state.supplies}
                                onChange = {this.handleChange}
                            />Supplies
                        </label>
                    </div>
                    <div className='child'>
                        <label className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    name='social'
                    value={this.state.social}
                    onChange = {this.handleChange}
                />Social platform / network
              </label>
                        <label className='checkbox'> 
                <input className='checkbox'
                    type= 'checkbox'
                    name='tech'
                    value={this.state.tech}
                    onChange = {this.handleChange}
                />
                Tech skills
              </label>
                    </div>
                </div>
                <input type="submit" value="Search" className='search box5'/>

            </form>
        )
    }
}
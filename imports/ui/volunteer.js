
import React, { Component } from 'react';
import Search from './search.js';
import {Dropdown} from 'semantic-ui-react';


const focus = [
    { value: 'aid', text: 'Medical efforts' },
    { value: '1', text: 'Local communities' },
    { value: 'spread', text: 'Prevention of further spread' },
  ]


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
            search: false,
            step1: true,
            step2: false,
            step3: false,
            step4: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSemanticChange = this.handleSemanticChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.zero = this.zero.bind(this);
        this.one = this.one.bind(this);
        this.two = this.two.bind(this);
        this.three = this.three.bind(this);

      }
    

      handleChange (evt) {
          this.setState({ [evt.target.name]: evt.target.value });
          console.log("new value", this.state.time, this.state.method);
      }
      handleSemanticChange = (event, data) => {
          this.setState({
              [data.name]: data.value
          })
      }

      onSubmit(evt) {
        evt.preventDefault();
        this.setState({ 
            search : true,
            step4:false
        });

      }

      zero(){
          this.setState({step1:true,step2:false})
      }
      one(){
        this.setState({step1:false, step2:true, step3:false})
      }

      two(){
          this.setState({step2: false, step3:true, step4:false})
      }

      three(){
          this.setState({step3:false,step4:true})
      }

    render(){
        return (
            <div className='volunteerdiv'>
                            
            <form className="volunteer-form" onSubmit={this.onSubmit} >
            {this.state.step1? (<div className = 'box' >
                <h1>1. The best way I can help is with my:</h1>
                    <label className='inline'>
                    <p className='inline'>Time</p>
                    <input 
                    id="typeinp" 
                    name='time'
                    type="range" 
                    min="0" max="10" 
                    className = 'slider inline'
                    onChange={this.handleChange}
                    step="1"/>
                    <p className='inline2'>{this.state.time} Hour(s)</p>
                    
                </label>
                    <label className='inline'> 
                    <p className='inline'>Money</p>
                    <input 
                    id="typeinp" 
                    name='money'
                    type="range" 
                    min="0" max="200"
                    className= 'slider inline' 
                    value={this.state.money} 
                    onChange={this.handleChange}
                    step="5"
                    />
                    <p className='inline2'>${this.state.money} USD</p>
                </label>
                <button className = 'next' onClick = {this.one} > Next </button>
            </div>) : ''} 


            {this.state.step2? <div className = 'box'>
            <button className = 'back' onClick = {this.zero} >  &lt; Back </button>
                <h1 >2. With my limited resources, I want to focus on:</h1>
                    <Dropdown 
                        name = 'method' 
                        options={focus} 
                        selection
                        onChange={this.handleSemanticChange} 
                        value = {focus.value}
                        fluid
                        />
                    
                        <button className='next' onClick = {this.two} > Next </button>

            </div> : ''}
            
            
            {this.state.step3? <div className = 'box'>
                <button className = 'back' onClick = {this.one} > &lt; Back </button>      
                <h1 >3. I have access to:</h1>
                <div className='flexleft'>
                    <div className='child'>
                <label className='check'> 
                    <input className='checkbox'
                        type= 'checkbox'
                        name='internet'
                        onChange = {this.handleChange}
                    />The internet
                </label>
                <label  className='check'> 
                    <input className='checkbox'
                        type= 'checkbox'
                        name='car'
                        onChange = {this.handleChange}
                    />Car
                </label>
                <label className='check'> 
                    <input className='checkbox'
                        type= 'checkbox'
                        name='supplies'
                        onChange = {this.handleChange}
                    />Supplies
                </label>
                </div>
                    <div className='child'>
              <label className='check'> 
                <input className='checkbox'
                    type= 'checkbox'
                    name='social'               
                    onChange = {this.handleChange}
                />Social platform / network
              </label>
              <label className='check'> 
                <input className='checkbox'
                    type= 'checkbox'
                    name='tech'
                    onChange = {this.handleChange}
                />
                Tech skills
              </label>
              </div>
                </div> 
                <button className = 'next' onClick = {this.three} > Next </button>
                
            </div> : ''}
            

            {this.state.step4? 
            <div className = 'box'>
                <button className = 'back' onClick = {this.two} > &lt; Back </button>
                <h1 >4. I'm based in:</h1>
                    <input
                        type="text"
                        name="location"
                        placeholder="New York City, NY, US"
                        onChange = {this.handleChange}            
                    />
                    
                    <input type="submit" value="Search" className='search box5'/>
            </div> : ''}


          </form>
          {(this.state.search)? <div>
                <Search 
                    time={this.state.time} 
                    money={this.state.money} 
                    location={this.state.location} 
                    method={this.state.method}
                    internet={this.state.internet}
                    car={this.state.car}
                    supplies={this.state.supplies}
                    social={this.state.social}
                    tech={this.state.tech}

                    />
            
                        </div> : ''}
          </div>
        )
    }
}



import React, { Component } from 'react'

 class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name:"",
      country:"",
       
    };
  }
  onSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state)
    const name =event.target.name.value
    const country =event.target.country.value
    this.setState({name,country},()=>{
      console.log(this.state)
      event.target.country.value="";
      event.target.name.value="";

    })
    

  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
          <input type="text" placeholder="Enter your name" name="name" />
          </div>
          <div>
          <label>Country: </label>
          <select name='country'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          </div>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Form

import React, { Component } from 'react'
import Greet from './components/Greet'
import Register from './components/Register';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:null,
      password:null,
      email:null,
      isRegistered: false,
      showPassword: false
  }
};
  RegisterHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    const email = event.target.email.value;
    this.setState({name, email,password, isRegistered: true})
  }
  showPasswordHandler = () => {
   
    this.setState({showPassword:!this.state.showPassword})


  }
  render() {
    return (
      <div>
        {this.state.isRegistered ? <Greet name={this.state.name} email={this.state.email}/> : <Register submit={this.RegisterHandler} showPassword={this.state.showPassword} click={this.showPasswordHandler} />}    
       </div>
    )
  }
}

export default App

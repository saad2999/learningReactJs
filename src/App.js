import './App.css';
import Header from './components/Header';
import Person from './components/Person';
import Form from './components/Form';



import React, { Component } from 'react';

class App extends Component {
  constructor(props){   
    super(props);
    this.state = {
      persons: [
        {name: "John", age: 23},
        {name: "Jane", age: 24},
        {name: "Jack", age: 25} 

      ],
      isShow: false,
    }
  };
  Togglehandler = this.Togglehandler.bind(this);
  
   Togglehandler()
  {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  removehandler=(personindex)=>{
    let personCopy=this.state.persons;
    personCopy.splice(personindex,1)
    this.setState({persons:personCopy});
  };
  render() {
    // let persons;
    //     persons = this.state.persons.map((p,index) => {
    //   return <Person key={index} name={p.name} age={p.age} remove={()=>this.removehandler(index)} />;
    // });  
    return <div className="App">
     {/* <button onClick={this.Togglehandler}> Toggle </button> */}
      {
        // this.state.isShow ? persons : null
        <Form/>
      }
       </div>   
    

    
  }
}

export default App;



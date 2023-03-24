import React, { Component } from 'react'

 class Controlledcomponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"saad"
        }
    }
    Changehandler=(event)=>{
        const name=event.target.value;
        this.setState({name})

    }
    
  render() {
    return (
      <div>
        <form action="">
            <input type="text" name="user_name" value={this.state.name} onChange={this.Changehandler} />
        </form>
      </div>
    )
  }
}

export default Controlledcomponent

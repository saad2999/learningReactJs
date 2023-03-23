import React, {Component} from "react";
import './personstyle.css';
class Person extends Component {
   constructor(props){

    super(props);
    this.props = props;    
   }
    render(){
        return (
            <div className="persondiv" onClick={this.props.remove}>
                <h1>Name: {this.props.name}</h1>
                <h1>age: {this.props.age}</h1>
            </div>
        )
    }
    
}
export default Person;
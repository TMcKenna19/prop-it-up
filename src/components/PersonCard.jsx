import React, {Component} from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render(){
        const birthdayButton = ()=>{
            this.setState({age: this.state.age +1})
            console.log("birthdayButton clicked")
        }
        const youthFountain = () => {
            this.setState({age: this.state.age -1})
            console.log("youth button clicked")
        }
        
        
        return (
            <>
            <h2>Government Name: {this.props.fullName}</h2>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={youthFountain}>Fountain of Youth</button>
            <button onClick={birthdayButton}>Birthday</button>
            <button>click for event</button>
            <hr/>
            </>
        )
    }
}

export default PersonCard;


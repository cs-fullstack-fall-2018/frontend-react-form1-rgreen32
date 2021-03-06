import React, {Component} from 'react'

class PersonStats extends Component{
    constructor(props){
        super(props);
        this.state ={name:"", age:"", mood:""}
    }

    updateName = (event) =>{
        this.setState({name: event.target.value})
    };
    updateAge = (event) =>{
        this.setState({age: event.target.value})
    };
    updateMood = (event) =>{
        this.setState({mood: event.target.value})
    };
    submitFunction = (event) => {
        this.setState({sentence: ("Hello"+ this.state.name + ". Your age is" + this.state.age + "and you're feeling " + this.state.mood)  })
        event.preventDefault();
    };
    render(){
        return(
            <div>
                <form onSubmit={this.submitFunction}>
                    <h1>Psychic</h1>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={this.state.name} onChange={this.updateName}/> <br/>

                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" value={this.state.age} onChange={this.updateAge}/>

                    <label htmlFor="mood">Mood: </label>
                    <input type="text" id="mood" value={this.state.mood} onChange={this.updateMood}/> <br/>
                    <br/>

                    {this.state.sentence}
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}
export default PersonStats

// The message isn't displaying once after the submit button is pressed. Change the code so the message is being saved in your submit function for the classwork to be correct.

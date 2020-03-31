import React from 'react'
import {Prompt} from 'react-router'

class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }
    render(){
        return (
            <>
            <div>About page</div>
            <Prompt
                when={!!this.state.name}
                message="Are you sure you want to leave?"
                />
            <input type='text' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
            </>
        )
    }
   
}
export default About
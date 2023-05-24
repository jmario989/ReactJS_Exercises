import React from "react";

import { inject } from "mobx-react";

@inject("store")
class Add extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue: ""
        };
    }

    updateInputValue = event => {
        this.setState({ inputValue: event.target.value });
    }

    add = () => {
        if(this.state.inputValue.trim()){
            this.props.store.add(this.state.inputValue);
            this.setState({ inputValue: "" });
        }
        else{
            alert("Write something ...");
        }
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="Add new" onChange={this.updateInputValue} value={this.state.inputValue} />
                <button type="button" onClick={this.add} >Add</button>
            </div>
        );
    }


}

export default Add;
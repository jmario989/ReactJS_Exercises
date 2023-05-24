import React from "react";

import YourName from "./YourName";
import YourColor from "./YourColor";

class WelcomeMessage extends React.Component{

    state = {
        name: "",
        favoriteColor: "rgb(0,0,0)",
        printHello: false
    };

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    }

    handleColorChange = event => {
        this.setState({ favoriteColor: event.target.value });
    }

    hello = () => {
        this.setState({ printHello: true });
    }

    render(){
        if(!this.state.printHello){
            return (
                <YourName name={this.state.name} onNameChange={this.handleNameChange} onButtonClick={this.hello} />
                /*
                <div>
                    <p>Pozdrav, htjeli bi znati kako se zovete: {this.state.name}</p>
                    <input type="text" autoFocus onChange={this.handleNameChange} />
                    <button type="button" onClick={this.hello}>U redu</button>
                </div>
                */
            );
        }
        else{
            return (
                <YourColor name={this.state.name} favoriteColor={this.state.favoriteColor} onColorChange={this.handleColorChange} />
                /*
                <div>
                    <h2 style={{color: this.state.favoriteColor}}>Dobrodošli {this.state.name}!</h2>
                    <p>Molimo odaberite omiljenu boju:</p>
                    <input type="color" onChange={this.handleColorChange} />
                </div>
                */
            );
        }
    }

}

export default WelcomeMessage;
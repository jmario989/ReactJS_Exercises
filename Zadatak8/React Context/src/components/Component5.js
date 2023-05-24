import React from "react";

// dva načina za korištenje podataka iz konteksta: unaprijed definirana svojstva contextType i context te komponenta <Consumer>

import Context from "../context/Context";

import { Consumer } from "../context/Context";

class Component5 extends React.Component{
    // statično svojstvo: svojstvo klase a ne njezinih instanci (objekti)
    static contextType = Context;

    render(){
        const { text, number } = this.context;
        const data = `Poslani tekst: ${text}, poslani broj: ${number}`;

        return (
            <div>
                <h1>Component5</h1>
                <p>{data}</p>
                <Consumer>{ctx => <p>Poslani tekst: {ctx.text}, poslani broj: {ctx.number}</p>}</Consumer>
            </div>
        );
    }

}

export default Component5;
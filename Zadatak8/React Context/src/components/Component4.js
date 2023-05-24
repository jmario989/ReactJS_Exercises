// dva načina za korištenje podataka iz konteksta: hook funkcija useContext() i komponenta <Consumer>

import { useContext } from "react";
import Context from "../context/Context";

import { Consumer } from "../context/Context";

function Component4(){
    const contextObject = useContext(Context);
    const { text, number } = contextObject;
    const data = `Poslani tekst: ${text}, poslani broj: ${number}`;

    return (
        <div>
            <h1>Component4</h1>
            <p>{data}</p>
            <Consumer>{ctx => <p>Poslani tekst: {ctx.text}, poslani broj: {ctx.number}</p>}</Consumer>
        </div>
    );
}

export default Component4;
import React from "react";

class YourName extends React.Component{

    render(){
        const { name, onNameChange, onButtonClick } = this.props;
        return (
            <div>
                <p>Pozdrav, htjeli bi znati kako se zovete: {name}</p>
                <input type="text" autoFocus onChange={onNameChange} />
                <button type="button" onClick={onButtonClick}>U redu</button>
            </div>
        );
    }

}

export default YourName;
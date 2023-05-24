import React from "react";

class User extends React.Component{

    render(){
        const { name, years, onNameChange } = this.props;
        // const ispis = onNameChange ? <input type="text" onChange={onNameChange} value={name} /> : "";
        return (
            <div>
                <p>Pozdrav, moje ime je {name} i imam {years} godina.</p>
                {/* ispis */}
                <input type="text" onChange={onNameChange} value={name} />
            </div>
        );
    }

}

export default User;
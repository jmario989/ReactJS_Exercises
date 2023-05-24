import React from "react";

import NewUser from "./NewUser";
import ShowUsers from "./ShowUsers";

class Users extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    addNewUser = (name, years) => {
        var newUser = {
            id: name + "_" + new Date().getTime(),
            name: name,
            years: years
        };
        this.setState({ users: [...this.state.users, newUser] });
    }

    deleteUser = index => {
        const arr = [...this.state.users];
        arr.splice(index, 1);
        this.setState({ users: arr });
    }

    render(){
        return (
            <div className="sadrzaj">
                <h1 style={{ color: "blue", fontFamily: "Times New Roman", fontSize: "46px" }}>Korisnici</h1>
                <NewUser onNewUser={this.addNewUser} />
                {this.state.users.length > 0 ? <ShowUsers users={this.state.users} onUserDelete={this.deleteUser} /> : ""}
            </div>
        );
    }

}

export default Users;
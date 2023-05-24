import React from "react";

import Button from "react-bootstrap/Button";

class ShowUsers extends React.Component{

    render(){
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Ime i prezime</th>
                            <th>Godine</th>
                            <th>Brisanje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.years}</td>
                                    <td><Button variant="danger" onClick={() => this.props.onUserDelete(index)}>Briši</Button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ShowUsers;
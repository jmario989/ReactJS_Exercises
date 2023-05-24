import React from "react";

class Table extends React.Component{

    render(){
        return (
            <table border="1">
                <thead>
                    <tr>
                        <th>Ime prezime</th>
                        <th>Datum rođenja</th>
                        <th>Adresa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.imePrezime}</td>
                        <td>{this.props.datumRodenja}</td>
                        <td>{this.props.adresa}, {this.props.grad}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

}

export default Table;
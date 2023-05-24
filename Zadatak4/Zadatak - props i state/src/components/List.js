import React from "react";

class List extends React.Component{

    render(){
        const { imePrezime, datumRodenja, adresa, grad } = this.props;
        return (
            <ul>
                <li>Ime prezime: {imePrezime}</li>
                <li>Datum rođenja: {datumRodenja}</li>
                <li>Adresa: {adresa}, {grad}</li>
            </ul>
        );
    }

}

export default List;
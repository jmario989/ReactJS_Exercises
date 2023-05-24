import React from "react";
import pt from "prop-types";

import Table from "./Table";
import List from "./List";

Table.propTypes = {
    imePrezime: pt.string,
    datumRodenja: pt.string,
    adresa: pt.string,
    grad: pt.string
}

List.propTypes = {
    imePrezime: pt.string,
    datumRodenja: pt.string,
    adresa: pt.string,
    grad: pt.string
}

class Main extends React.Component{

    state = {
        polaznik: {
            ime: "Pero",
            prezime: "Perić",
            datumRodenja: "01.01.2000",
            adresa: "Gajeva 1",
            grad: "Varaždin",
            imePrezime: function(){
                return this.ime + " " + this.prezime;
            }
        },
        formatPrikaza: "tablica"
    }

    promijeniFormatPrikaza = event => {
        this.setState({formatPrikaza: event.target.value});
    }

    render(){
        const { polaznik, formatPrikaza } = this.state;

        const ispis = formatPrikaza === "lista" ? <List imePrezime={polaznik.imePrezime()} datumRodenja={polaznik.datumRodenja} adresa={polaznik.adresa} grad={polaznik.grad} /> : formatPrikaza === "tablica" ? <Table imePrezime={polaznik.imePrezime()} datumRodenja={polaznik.datumRodenja} adresa={polaznik.adresa} grad={polaznik.grad} /> : <h3>Pogrešno odabran format prikaza podataka.</h3>;

        return (
            <div>
                <p>
                    <label>Odaberite format prikaza: </label>
                    <select onChange={this.promijeniFormatPrikaza}>
                        <option value="tablica">Tablica</option>
                        <option value="lista">Lista</option>
                    </select>
                </p>
                {ispis}
            </div>
        );

    }

}

export default Main;
function Main(){

    const polaznik = {
        ime: "Pero",
        prezime: "Perić",
        datumRodenja: "01.01.2000",
        adresa: "Gajeva ulica 1",
        grad: "Zagreb",
        formatPrikaza: "tablica",
        imePrezime: function(){
            return this.ime + " " + this.prezime;
        }
    }

    if(polaznik.formatPrikaza === "tablica"){
        return (
            <table border="1">
                <thead>
                    <tr><th>Ime prezime</th><th>Datum rođenja</th><th>Adresa</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{polaznik.imePrezime()}</td>
                        <td>{polaznik.datumRodenja}</td>
                        <td>{polaznik.adresa}, {polaznik.grad}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
    else if(polaznik.formatPrikaza === "lista"){
        return (
            <ul>
                <li>{polaznik.imePrezime()}</li>
                <li>{polaznik.adresa}</li>
                <li>{polaznik.adresa}, {polaznik.grad}</li>
            </ul>
        );
    }
    else{
        return (
            <div>
                <h3>Pogrešno odabran format prikaza podataka.</h3>
            </div>
        );
    }

    // 2. način
    /*
    const ispis = polaznik.formatPrikaza === "tablica" ? <table border="1">
            <thead>
                <tr><th>Ime prezime</th><th>Datum rođenja</th><th>Adresa</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>{polaznik.imePrezime()}</td>
                    <td>{polaznik.datumRodenja}</td>
                    <td>{polaznik.adresa}, {polaznik.grad}</td>
                </tr>
            </tbody>
        </table> : polaznik.formatPrikaza === "lista" ? <ul>
                <li>{polaznik.imePrezime()}</li>
                <li>{polaznik.adresa}</li>
                <li>{polaznik.adresa}, {polaznik.grad}</li>
            </ul> :  <div>
                <h3>Pogrešno odabran format prikaza podataka.</h3>
            </div>;
    return ispis;
    */

    // 3. način
    /*
    return (
        <div>
            {polaznik.formatPrikaza === "tablica" && <table border="1">
                <thead>
                    <tr><th>Ime prezime</th><th>Datum rođenja</th><th>Adresa</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{polaznik.imePrezime()}</td>
                        <td>{polaznik.datumRodenja}</td>
                        <td>{polaznik.adresa}, {polaznik.grad}</td>
                    </tr>
                </tbody>
            </table>}
            {polaznik.formatPrikaza === "lista" && <ul>
                <li>{polaznik.imePrezime()}</li>
                <li>{polaznik.adresa}</li>
                <li>{polaznik.adresa}, {polaznik.grad}</li>
            </ul>}
            {polaznik.formatPrikaza !== "tablica" && polaznik.formatPrikaza !== "lista" && <div>
                <h3>Pogrešno odabran format prikaza podataka.</h3>
            </div>}
        </div>
    );
    */

}

export default Main;
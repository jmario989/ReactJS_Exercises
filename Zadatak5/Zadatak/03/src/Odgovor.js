function Odgovor({podaci}){

    const {imePrezime, godinaRodenja, spol, programObrazovanja, ocjena} = podaci;

    return (
        <div>
            <h1>Vaši odgovori</h1>
            <table border="1">
                <thead>
                    <tr><th>Ime i prezime</th><th>Godina rođenja</th><th>Spol</th><th>Program obrazovanja</th><th>Ocjena</th></tr>
                </thead>
                <tbody>
                    <tr><td>{imePrezime}</td><td>{godinaRodenja}</td><td>{spol === "M" ? "Muško" : spol === "Ž" ? "Žensko" : ""}</td><td>{programObrazovanja}</td><td>{ocjena}</td></tr>
                </tbody>
            </table>
        </div>
        );

}

export default Odgovor;
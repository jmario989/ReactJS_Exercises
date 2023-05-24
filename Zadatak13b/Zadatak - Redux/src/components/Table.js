function Table(props){

    var zbroj = 0;

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Naslov knjige</th>
                    <th>Godina Izdanja</th>
                    <th>Cijena</th>
                </tr>
            </thead>
            <tbody>
                {props.podaci.map(({knjigaId, naslovKnjige, godinaIzdanja, cijena}) => {
                    zbroj = zbroj + parseFloat(cijena);
                    return (
                        <tr key={knjigaId}>
                            <td>{naslovKnjige}</td>
                            <td>{godinaIzdanja}</td>
                            <td className="posljednji-stupac">{cijena}</td>
                        </tr>
                    );
                })}
            </tbody>
            <tfoot>
                <tr className="posljednji-red"><td colSpan="2">Ukupno:</td><td>{zbroj.toFixed(2)}</td></tr>
            </tfoot>
        </table>
    );

}

export default Table;
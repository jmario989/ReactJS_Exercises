function ShowMovies(props){

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Naziv filma</th>
                    <th>Godina izlaska</th>
                    <th>Naziv žanra</th>
                </tr>
            </thead>
            <tbody>
                {props.movies.map((m, i) => {
                    return (
                        <tr key={i}>
                            <td>{m.nazivFilma}</td>
                            <td>{m.godinaIzlaska}</td>
                            <td>{m.nazivZanra}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

}

export default ShowMovies;
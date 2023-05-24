import { useState, useEffect } from "react";
import { fetchData } from "../services/fetchData";
import Select from "../components/Select";
import Table from "../components/Table";

function AuthorBooks(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [author, setAuthor] = useState(0);

    const handleAuthorChange = event => {
        setAuthor(event.target.value);
    }

    useEffect(() => {
        fetchData("https://frodo.ess.hr/api/knjige-autor.php?autor=" + author, setData, setError);
        // console.log("AuthorBooks");
    }, [author]);

    return (
        <div className="sadrzaj">
            <h1>Pretraga knjiga po autoru</h1>
            <Select onAuthorChange={handleAuthorChange} />
            {error ? <div>Greška: {error}</div> : data.length > 0 ? <Table podaci={data} /> : ""}
        </div>
    );

}

export default AuthorBooks;
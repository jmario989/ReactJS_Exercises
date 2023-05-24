import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";
import Table from "../components/Table";

function AllBooks(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetchData("https://frodo.ess.hr/api/sve-knjige.php", setData, setError, signal);

        return () => {
            controller.abort();
        }

     }, []);

    if (error) {
        return <div>Greška: {error}</div>;
    }
    
      if (!data) {
        return <div>Učitavanje podataka</div>;
    }
    
    return (
        <div className="sadrzaj">
            <h1>Sve knjige</h1>
            <Table podaci={data} />
        </div>
    );
}

export default AllBooks;
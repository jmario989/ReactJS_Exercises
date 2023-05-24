import { useEffect } from "react";
import Table from "../components/Table";

import { useSelector, useDispatch } from 'react-redux';
import { getAllData, getErrorAllData } from "../services/connectFunctions";
import { fetchAll } from "../services/actions";

function AllBooks(){
    const data = useSelector(getAllData);
    const error = useSelector(getErrorAllData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAll());
        console.log("AllBooks");
     }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
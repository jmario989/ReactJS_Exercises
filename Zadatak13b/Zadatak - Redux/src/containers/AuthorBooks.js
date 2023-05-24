import { useEffect, useState } from "react";
import Table from "../components/Table";
import Select from "../components/Select";

import { useSelector, useDispatch } from 'react-redux';
import { getAuthorsData, getErrorAuthorsData } from "../services/connectFunctions";
import { fetchAuthor } from "../services/actions";

function AuthorBooks(){
    const [author, setAuthor] = useState(0);

    const data = useSelector(getAuthorsData);
    const error = useSelector(getErrorAuthorsData);
    const dispatch = useDispatch();


    const handleAuthorChange = event => {
        setAuthor(event.target.value);
    }
      
    
    useEffect(() => {
        dispatch(fetchAuthor(author));
        console.log("AuthorBooks");
      }, [author]); // eslint-disable-line react-hooks/exhaustive-deps
      

    
    return (
        <div className="sadrzaj">
            <h1>Pretraga knjiga po autoru</h1>
            <Select onAuthorChange={handleAuthorChange} />
            {error ? <div>Greška: {error}</div> : data.length > 0 ? <Table podaci={data} /> : "" }
        </div>
    );
}

export default AuthorBooks;
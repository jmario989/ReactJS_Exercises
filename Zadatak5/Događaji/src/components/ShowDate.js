import { useState } from "react";

function ShowDate(){

    const [datum, postaviDatum] = useState(new Date().toString());

    const promijeniFormat = () => {
        postaviDatum(new Date().toLocaleDateString());
    }

    const funkcijaSArgumentima = (a, b) => {
        alert(a * b);
    }

    return (
        <div>
            <div>
                <hr />
                <p>{datum}</p>
                <button type="button" onClick={promijeniFormat}>Promijeni format datuma</button>
            </div>
            <div>
                <hr />
                <h2>Poziv funkcije s argumentima</h2>
                <button type="button" onClick={() => funkcijaSArgumentima(2, 3)}>Primjer funkcije s argumentima</button>
                <button type="button" onClick={funkcijaSArgumentima.bind(this, 2, 3)}>Primjer funkcije s argumentima</button>
            </div>
        </div>
    );

}

export default ShowDate;
import { useState, useEffect } from "react";

function Clock(){
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timerId = setInterval(tick, 1000);

        // radnja koja se izvrši neposredno prije nego što se komponenta ukloni iz DOM-a
        return () => {
            clearInterval(timerId);
        }

    }, []); // prazan niz osigurava da se funkcija pozove samo jedanput (kod prvog renderiranja)
    
    var tick = () => {
        // console.log("tick");
        setDate(new Date());
    }


    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;
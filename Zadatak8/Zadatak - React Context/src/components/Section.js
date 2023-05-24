import React from "react";

import Context from "../context/Context";

class Section extends React.Component{
    static contextType = Context;

    render(){
        const { color, font } = this.context;

        return (
            <section>
                <table border="1" style={{ color: color, fontFamily: font }}>
                    <thead>
                        <tr><th>Ime i prezime</th><th>Datum rođenja</th><th>Broj telefona</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Pero Perić</td><td>01.01.2000</td><td>099/111 222</td></tr>
                        <tr><td>Ana Anić</td><td>01.01.2001</td><td>099/333 444</td></tr>
                        <tr><td>Tomo Tomić</td><td>01.01.2002</td><td>099/555 666</td></tr>
                    </tbody>
                </table>
            </section>
        );
    }

}

export default Section;
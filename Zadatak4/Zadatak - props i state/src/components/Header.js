import React from "react";

class Header extends React.Component{

    render(){
        return (
            <header>
                <div>
                    <h1>{this.props.naslov}</h1>
                </div>
                <div>
                    <ul>
                        <li><strong>Tel:</strong> +385 1 2332 861</li>
                        <li><strong>Fax:</strong> +385 1 2305 004</li>
                        <li><strong>E-mail:</strong> info@algebra.hr</li>
                    </ul>
                </div>
                <hr />
            </header>
        );
    }

}

export default Header;
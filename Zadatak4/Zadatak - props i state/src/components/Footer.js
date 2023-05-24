import React from "react";

class Footer extends React.Component{

    render(){
        return (
            <footer>
                <hr />
                <p><a href="https://algebra.hr/" target="_blank" rel="noreferrer noopener">Službene stranice</a></p>
                <p>&copy; Sva prava pridržana. | {this.props.datum}</p>
            </footer>
        );
    }

}

export default Footer;
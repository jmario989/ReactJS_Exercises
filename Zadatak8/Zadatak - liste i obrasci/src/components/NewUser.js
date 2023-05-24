import React from "react";

class NewUser extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            years: "",
            error: ""
        };
    }

    onValueChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        if(this.state.name.trim() && this.state.years.trim() && !isNaN(this.state.years)){
            this.props.onNewUser(this.state.name, this.state.years);
            this.setState({ name: "", years: "", error: "" });
        }
        else{
            this.setState({ error: "Za predaju podataka ispravno popunite polja obrasca." });
        }
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Ime i prezime (obavezna vrijednost):</label><br />
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.onValueChange} /><br /><br />
                <label htmlFor="years">Godine (obavezna vrijednost numeričkog tipa):</label><br />
                <input type="text" id="years" name="years" value={this.state.years} onChange={this.onValueChange} /><br /><br />
                <input type="submit" value="Spremi" />
                <p><strong>{this.state.error}</strong></p>
            </form>
        );
    }

}

export default NewUser;
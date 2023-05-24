import React from "react";

import moduleStyle from "../new-user.module.css";

class NewUser extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            years: "",
            error: "",
            nameClass: "",
            yearsClass: ""
        };
    }

    onValueChange = event => {
        const { name, value } = event.target;

        if(name === "name"){
            if(!value.trim()){
                this.setState({ nameClass: "neispravno-polje" });
            }
            else{
                this.setState({ nameClass: "ispravno-polje" });
            }
        }
        else if(name === "years"){
            if(!value.trim() || isNaN(value)){
                this.setState({ yearsClass: "neispravno-polje" });
            }
            else{
                this.setState({ yearsClass: "ispravno-polje" });
            }
        }

        this.setState({ [name]: value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        if(this.state.name.trim() && this.state.years.trim() && !isNaN(this.state.years)){
            this.props.onNewUser(this.state.name, this.state.years);
            this.setState({ name: "", years: "", error: "", nameClass: "", yearsClass: "" });
        }
        else{
            this.setState({ error: "Za predaju podataka ispravno popunite polja obrasca." });
        }
    }

    render(){
        const stiloviGumbic = {
            fontSize: "20px",
            backgroundColor: "#fff",
            border: "3px groove lightblue"
        };

        return (
            <form onSubmit={this.onFormSubmit}>
                <h3 className={moduleStyle.podnaslov}>Unesite podatke o korisnicima: </h3>
                <label htmlFor="name">Ime i prezime (obavezna vrijednost):</label><br />
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.onValueChange} className={this.state.nameClass} /><br /><br />
                <label htmlFor="years">Godine (obavezna vrijednost numeričkog tipa):</label><br />
                <input type="text" id="years" name="years" value={this.state.years} onChange={this.onValueChange} className={this.state.yearsClass} /><br /><br />
                <input type="submit" value="Spremi" style={stiloviGumbic} />
                <p><strong>{this.state.error}</strong></p>
            </form>
        );
    }

}

export default NewUser;
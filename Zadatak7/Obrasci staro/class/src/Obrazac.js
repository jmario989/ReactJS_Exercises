import React from "react";

class Obrazac extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            korisnickoIme: "",
            godine: "",
            greskaKorisnickoIme: "",
            greskaGodine: "",
            greskaPredaja: "",
            podaciPredani: false
        };
    }

    rukujPromjenomPodataka = event => {
        const vrijednost = event.target.value;
        const naziv = event.target.name;
        const izrazIme = /^[a-zA-Z0-9]{3,10}$/g;

        if (naziv === "korisnickoIme") {
            if (vrijednost.search(izrazIme) === -1) {
                this.setState({greskaKorisnickoIme: <strong>Udovoljite zadanom formatu: 3-10 alfanumeričkih znakova</strong>});
            }
            else{
                this.setState({greskaKorisnickoIme: ""});
            }
        }
        else if (naziv === "godine") {
            //isNaN("") === false
            if (vrijednost.trim() === "" || isNaN(vrijednost)) {
                this.setState({greskaGodine: <strong>Upišite numeričku vrijednost.</strong>});
            }
            else{
                this.setState({greskaGodine: ""});
            }
        }

        this.setState({[naziv]: vrijednost});
        this.setState({greskaPredaja: ""});
    }

    rukujPredajomPodataka = event => {
        event.preventDefault();

        if(this.state.korisnickoIme !== "" && this.state.godine !== "" && this.state.greskaKorisnickoIme === "" && this.state.greskaGodine === ""){
            this.setState({podaciPredani: true});
        }
        else{
            this.setState({greskaPredaja: "Za predaju podataka ispravno popunite polja."});
        }
    }

    render(){
        if(!this.state.podaciPredani){
            return (
				<div>
					<h1>Obrazac</h1>
					<form onSubmit={this.rukujPredajomPodataka}>
						<label htmlFor="korisnickoIme">Korisničko ime: <strong>{this.state.korisnickoIme}</strong></label><br />
						<input type="text" id="korisnickoIme" name="korisnickoIme" onChange={this.rukujPromjenomPodataka} /> {this.state.greskaKorisnickoIme}<br /><br />
						<label htmlFor="godine">Godine: <strong>{this.state.godine}</strong></label><br />
						<input type="text" id="godine" name="godine" onChange={this.rukujPromjenomPodataka} /> {this.state.greskaGodine}<br /><br />
						<button type="submit">Predaj</button>
					</form>
					<p><strong>{this.state.greskaPredaja}</strong></p>
				</div>
			);
        }
        else{
            return (
				<div>
					<h1>Vaši podaci</h1>
					<p>Korisničko ime: {this.state.korisnickoIme}</p>
					<p>Godine: {this.state.godine}</p>
				</div>
			);
        }
    }

}

export default Obrazac;
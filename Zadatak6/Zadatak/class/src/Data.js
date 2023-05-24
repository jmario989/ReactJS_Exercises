import React from "react";
import loader from "./preloader.svg";

class Data extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            podaci: {
                url: "",
                title: "",
                explanation: ""
            },
            ucitano: false,
            error: false
        }
    }

    componentDidMount(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if(xhttp.readyState === 4 && xhttp.status === 200){
                var data = JSON.parse(xhttp.responseText);
                this.setState({ podaci: {
                    url: data.url,
                    title: data.title,
                    explanation: data.explanation
                }, ucitano: true });
            }
        }
        xhttp.onerror = () => {
            this.setState({ error: true });
        }
        xhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", true);
        //xhttp.open("GET", "https://frodo.ess.hr/api/nasa-planetary.php", true);
        xhttp.send();
    }

    render(){
        if(this.state.error){
            return (
                <div>
                    <p>Greška kod učitavanja podataka.</p>
                </div>
            );
        }
        else if(!this.state.ucitano){
            return (
                <div>
                    <img src={loader} alt="loader" /> 
                </div>
            );
        }
        else{
            return (
                <div>
                    <h1>{this.state.podaci.title}</h1>
                    <img src={this.state.podaci.url} alt={this.state.podaci.title} />
                    <p>{this.state.podaci.explanation}</p>
                </div>
            );
        }
    }

}

export default Data;
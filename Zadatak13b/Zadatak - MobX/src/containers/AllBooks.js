import React from "react";
import Table from "../components/Table";

import { observer, inject } from 'mobx-react';

@inject (store => ({
    allBooksStore: store.rootStore.allBooksStore
    })
)
@observer
class AllBooks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    componentDidMount(){
        fetch("https://frodo.ess.hr/api/sve-knjige.php")
        .then(response => response.json())
        .then(booksData => this.props.allBooksStore.add(booksData))
        .catch(error => this.setState({error: error.toString()}));
        console.log("AllBooks");
    }

    render(){
        if(this.state.error){
            return <div>Greška: {this.state.error}</div>;
        }

        if(!this.props.allBooksStore.allBooks.data){
            return <div>Učitavanje podataka</div>;
        }

        return (
            <div className="sadrzaj">
                <h1>Sve knjige</h1>
                <Table podaci={this.props.allBooksStore.allBooks.data} />
            </div>
        );
        
    }
}


export default AllBooks;
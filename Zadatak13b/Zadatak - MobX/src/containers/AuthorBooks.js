import React from "react";
import Table from "../components/Table";
import Select from "../components/Select";

import { observer, inject } from 'mobx-react';

@inject (store => ({
    authorBooksStore: store.rootStore.authorBooksStore,
    // allBooksStore: store.rootStore.allBooksStore
    })
)
@observer
class AuthorBooks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            author: 0
        };
    }


    handleAuthorChange = event => {
        this.setState({author: event.target.value});
    }

    fetchData = () => {
        fetch("https://frodo.ess.hr/api/knjige-autor.php?autor=" + this.state.author)
        .then(response => response.json())
        .then(booksData => this.props.authorBooksStore.add(booksData))
        .catch(error => this.setState({error: error.toString()}));
        console.log("AuthorBooks");
    }
    
    componentDidMount(){
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.author !== prevState.author) {
            this.fetchData();
        }
    }

    render(){

        return (
            <div className="sadrzaj">
                <h1>Pretraga knjiga po autoru</h1>
                <Select onAuthorChange={this.handleAuthorChange} />
                {this.state.error ? <div>{this.state.error}</div> : this.props.authorBooksStore.authorsBooks.data.length > 0 ? <Table podaci={this.props.authorBooksStore.authorsBooks.data} /> : ""}
            </div>
        );
    }
}

export default AuthorBooks;
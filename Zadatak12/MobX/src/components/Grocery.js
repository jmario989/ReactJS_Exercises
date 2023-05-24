import React from "react";

import { inject } from "mobx-react";

@inject("store")
class Grocery extends React.Component{

    delete = () => {
        this.props.store.delete(this.props.name);
    }

    render(){
        return (
            <li onClick={this.delete}>
                {this.props.name}
            </li>
        );
    }

}

export default Grocery;
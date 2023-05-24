import React from "react";

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../services/connectFunctions";

class NewComponentClass extends React.Component{

    render(){
        return (
            <div>
                <p>
                    <span>Broj: {this.props.count}</span>
                </p>
                <p>
                    <button onClick={this.props.reset}>Resetiraj broj</button>
                </p>
            </div>
        );
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewComponentClass);
import React from "react";

class UserClass extends React.Component{

    render(){
        // const { name, years } = this.props;
        return (
            <p>Pozdrav, moje ime je {this.props.name} i imam {this.props.years} godina.</p>
        );
    }

}

export default UserClass;
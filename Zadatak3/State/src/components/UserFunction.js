import pt from "prop-types";

function UserFunction({ name, years }){

    return (
        <p>Pozdrav, moje ime je {name} i imam {years} godina.</p>
    );

}

UserFunction.propTypes = {
    name: pt.string,
    years: pt.number
};

UserFunction.defaultProps = {
    years: 0
};


export default UserFunction;
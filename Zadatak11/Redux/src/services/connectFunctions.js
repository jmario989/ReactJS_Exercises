import { addToCount, subtractFromCount, setCount } from "./actions";

function mapStateToProps(state){
    return {
        count: state
    };
}

function mapDispatchToProps(dispatch){
    return {
        addOne: () => dispatch(addToCount(1)),
        subtractOne: () => dispatch(subtractFromCount(1)),
        reset: () => dispatch(setCount(0))
    };
}

export { mapStateToProps, mapDispatchToProps };
import { useSelector, useDispatch } from "react-redux";
import { setCount } from "../services/actions";
import { mapStateToProps } from "../services/connectFunctions";

function NewComponentFunction(){
    const data = useSelector(mapStateToProps);
    const dispatch = useDispatch();

    return (
        <div>
            <p>
                <span>Broj: {data.count}</span>
            </p>
            <p>
                <button onClick={() => dispatch(setCount(0))}>Resetiraj broj</button>
            </p>
        </div>
    );

}

export default NewComponentFunction;
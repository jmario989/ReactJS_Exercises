import React from "react";

import { inject, observer } from "mobx-react";
import Grocery from "./Grocery";

@inject("store")
@observer
class GroceriesList extends React.Component{

    render(){
        const store = this.props.store;
        return (
            <div>
                <h2>Total: {store.numOfGroceries}</h2>
                <div>
                    {store.groceries.map((g, i) => {
                        return <Grocery key={i} name={g} />
                    })}
                </div>
            </div>
        );
    }

}

export default GroceriesList;
import random from "random-seedable";

function Random(){
    return (
        <div>
            <h4>Random int: {random.int()}</h4>
            <h4>Random float: {random.float()}</h4>
        </div>
    );
}

export default Random;
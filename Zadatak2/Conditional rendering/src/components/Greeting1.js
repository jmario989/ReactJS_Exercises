function Greeting1(){

    const user = "Ivan Horvat";

    if(user.startsWith("Ivan")){
        return (
            <div>
                <p>Hello friend!</p>
            </div>
        );
    }
    else{
        return (
            <div>
                <p>Hello stranger.</p>
            </div>
        );
    }

}

export default Greeting1;
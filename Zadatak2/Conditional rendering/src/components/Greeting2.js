function Greeting2(){

    const user = "Ivan Horvat";

    const greetings = user.startsWith("Ivan") ? <p>Hello friend!</p> : <p>Hello stranger.</p>;

    return <div>{greetings}</div>;

}

export default Greeting2;
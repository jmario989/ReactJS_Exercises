function Greeting3(){

    const user = "Ivan Horvat";
    const isFriend = user.startsWith("Ivan");

    return (
        <div>
            {isFriend && <p>Hello friend!</p>}
            {!isFriend && <p>Hello stranger.</p>}
        </div>
    );

}

export default Greeting3;
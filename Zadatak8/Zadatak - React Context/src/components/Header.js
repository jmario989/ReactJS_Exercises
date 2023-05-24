import Context from "../context/Context";
import { useContext } from "react";

// import { Consumer } from "../context/Context";

function Header(){
    const contextObject = useContext(Context);
    const { color, font } = contextObject;

    return (
        <header>
            {/* <Consumer>{ctx => <h1 style={{color: ctx.color, fontFamily: ctx.font}}>Podaci o korisnicima</h1>}</Consumer> */}
            <h1 style={{ color: color, fontFamily: font }}>Podaci o korisnicima</h1>
        </header>
    );

}

export default Header;
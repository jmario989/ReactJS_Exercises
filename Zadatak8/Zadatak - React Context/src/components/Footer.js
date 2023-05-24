import Context from "../context/Context";
import { useContext } from "react";

function Footer(){
    const contextObject = useContext(Context);
    const { color, font } = contextObject;

    return (
        <footer>
            <p style={{ color: color, fontFamily: font }}>&copy; Sva prava pridržana.</p>
        </footer>
    );

}

export default Footer;
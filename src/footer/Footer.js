import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    return(
        <footer>
            <div className="alphabetBox">
                {alphabet.map(el => {
                    return(
                        <Link to={el} key={el}>
                            {el}
                        </Link>
                    );
                })}
            </div>
        </footer>
    )
}

export default Footer;
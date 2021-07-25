import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import logo from "./images/cocktail.png";
import basket from "./images/shopping-basket.png"
import {AppContenxt} from "../App"
import { useHistory, Link } from "react-router-dom";

const Header = () => {

    const appcontext = useContext(AppContenxt);
    const location = useHistory();
    const [input, setInput] = useState();

    function submitInput () {
        appcontext.setInputText(input);
        location.push(input);
        setInput("");
    }

    function toggleBasket() {
        if (appcontext.order === undefined || appcontext.order === "") {
            alert("Спочатку оберіть коктейль");
        } else {
            appcontext.setToggle(!appcontext.isToggle);
        }
        
    }

    return (
        <header>
            <div className="header">
                <Link to="/" >
                    <p>SkyBar</p>
                    <img src={logo} />
                    </Link>
                <div className="searchBox">
                    <input placeholder="Введіть назву коктейлю" value={input || ""} onChange={(event) => {setInput(event.target.value)}}/>
                    <button onClick={submitInput}>Пошук</button>
                </div>
                <div className="basket">
                    <img src={basket} onClick={() => toggleBasket()} />
                </div>
            </div>

        </header>
    );
}

export default Header;
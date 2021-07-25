import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import {AppContenxt} from "../App"

const Modal = () => {
    
    const appcontext = useContext(AppContenxt);

    function submitOrder() {
        console.log(appcontext.order);
        appcontext.setToggle(!appcontext.isToggle);
        appcontext.setOrder("");
    }

    return( ReactDOM.createPortal( appcontext.isToggle &&
        <div id="modal" className={appcontext.isToggle && "modal"}>
            
            {appcontext.order.map( (element) => {
                return(
                    
                    <div className="modalElement" key={element.cocktail.idDrink}>
                        <img src={element.cocktail.strDrinkThumb} alt={element.cocktail.strDrink}/>
                        <h4>{element.cocktail.strDrink}</h4>
                        <h5>{`${element.count}x`}</h5>
                    </div>
               
                )
                }
            )}
            <button onClick={() => {submitOrder()}}>Підтвердити</button>
        </div>
    ,
    document.getElementById("root")
    ));
}

export default Modal;
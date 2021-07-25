import React, { useContext } from "react";
import "./SelectCocktail.css"
import useFetchMovies from "../Ownhook";
import {ContentContext} from "./Content"
import { AppContenxt } from "../App";

const SelectCocktail = () => {
    const appcontext = useContext(AppContenxt);
    const things = useContext(ContentContext);
    const location = things.pathname.substring(1);

    const fetchRes = useFetchMovies(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${location}`);
  
    function addToOrder () {
        if (!appcontext.order) {
            appcontext.setOrder([{"cocktail":fetchRes.drinks[0], count: 1}]);
        }else if(appcontext.order.find(e => e.cocktail.idDrink===fetchRes.drinks[0].idDrink)) {
          appcontext.order.map( (element) => {
                if (element.cocktail.idDrink === fetchRes.drinks[0].idDrink) {
                  element.count++;
                }
              });
        }else {
          appcontext.setOrder([...appcontext.order,{"cocktail":fetchRes.drinks[0], count: 1}]); 
        }
  
    }
    
    return( fetchRes !== undefined &&
        <div className="selectCocktail">
        <h1>{fetchRes.drinks[0].strDrink}</h1>
        <img src={fetchRes.drinks[0].strDrinkThumb}/>
        <button onClick={() => {addToOrder()}}>Замовити</button>
        </div>
    );
}

export default SelectCocktail;
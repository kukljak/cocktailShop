import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./Content.css"
import { useLocation } from "react-router";
import useFetchMovies from "../Ownhook";
import SearchListCocktail from "./SearchListCocktail";
import SelectCocktail from "./SelectCocktail";
import SearchCocktail from "./SearchCocktail";
import { AppContenxt } from "../App";
import Modal from "../modal/Modal";

const ContentContext = React.createContext();

const Content = () => {
    const fetchRes = useFetchMovies("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const appcontext = useContext(AppContenxt);
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const location = useLocation();
    let locationIdCocktail = location.pathname.substring(1);
    locationIdCocktail = parseInt(locationIdCocktail);
    
    function showIdCocktail () {
        if (isNaN(locationIdCocktail)) {
          return true;
        } else {
          return false;
        }
      }

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

    return( 

        <ContentContext.Provider value={location} >
        <Switch>
        <Route exact path="/">
          <div className="contentBox">
            <h1>Персональна рекомендація</h1>
            {fetchRes !== undefined &&
              <div className="mainPage">
              <h2>{fetchRes.drinks[0].strDrink}</h2>
              <img src={fetchRes.drinks[0].strDrinkThumb} alt={fetchRes.drinks[0].idDrink} />
              <button onClick={() => {addToOrder()}}>Замовити</button>
              </div>
            }
          </div>
        </Route>
        <Route path={alphabet.map(el => {return "/" + el})}>
          <SearchListCocktail />
        </Route>
        <Route path={!showIdCocktail() && `/${appcontext.inputText}`}>
            <SearchCocktail />
        </Route>
        <Route path={showIdCocktail() && `/${locationIdCocktail}`}>
          <SelectCocktail />
        </Route>
      </Switch>
      </ContentContext.Provider>
    );
}

export default Content;
export {ContentContext};
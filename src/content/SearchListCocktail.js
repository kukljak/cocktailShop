import React from "react";
import "./SearchListCocktail.css"
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useFetchMovies from "../Ownhook";

const SearchListCocktail = () => {

    const location = useLocation();
    const searchLetter = location.pathname.replace("/","");
    const fetchRes = useFetchMovies(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchLetter}`);



    return(fetchRes !== undefined &&
        <div className="searchCocktailBox">
            {fetchRes.drinks.map(element => {
                return (
                    <Link to={element.idDrink}>
                    <div key={element.idDrink} className="searchCocktail">
                        <h4>{element.strDrink}</h4>
                        <img src={element.strDrinkThumb}/>
                    </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default SearchListCocktail;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useFetchMovies from "../Ownhook";
import { ContentContext } from "./Content";

const SearchCocktail = () => {

    const contentContext = useContext(ContentContext);
    const location = contentContext.pathname.substring(1);

    const fetchRes = useFetchMovies(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${location}`);

    return ( fetchRes !== undefined &&
        <div className="searchCocktailBox">
            {fetchRes.drinks.map( (element) => {
                return (
                    <Link to={element.idDrink}>
                    <div key={element.idDrink} className="searchCocktail">
                        <h4>{element.strDrink}</h4>
                        <img src={element.strDrinkThumb}/>
                    </div>
                    </Link>
            )})}
        </div>

    );
}

export default SearchCocktail;
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchSingleMeal, getLoading, getMeal } from '../redux/features/mealSlice';
import { useSelector, useDispatch } from 'react-redux';

const SingleMeal = () => {

    const dispatch = useDispatch();
    const meal = useSelector(getMeal);
    const loading = useSelector(getLoading);
    const [modifiedMeal, setModifiedMeal] = useState([]);

    //returns an object with id property
    const id = useParams();

    useEffect(() => {
        //returns an object with id property
        dispatch(fetchSingleMeal(id));

    }, [id])


    useEffect(() => {
        if (meal !== null && meal.length > 0) {
            const {
                idMeal,
                strMeal,
                strCategory,
                strArea,
                strInstructions,
                strMealThumb,
                strYoutube,
                strIngredient1, strIngredient2, strIngredient3,
                strIngredient4, strIngredient5, strIngredient6,
                strIngredient7, strIngredient8, strIngredient9,
                strIngredient10, strIngredient11, strIngredient12,
                strIngredient13, strIngredient14, strIngredient15,
                strIngredient16, strIngredient17, strIngredient18,
                strIngredient19, strIngredient20 } = meal[0];

            const simplifiedMeal = {
                id: idMeal,
                name: strMeal,
                country: strArea,
                category: strCategory,
                image: strMealThumb,
                youtube: strYoutube.slice(strYoutube.indexOf("=") + 1, strYoutube.length),
                ingredients: [strIngredient1, strIngredient2, strIngredient3,
                    strIngredient4, strIngredient5, strIngredient6,
                    strIngredient7, strIngredient8, strIngredient9,
                    strIngredient10, strIngredient11, strIngredient12,
                    strIngredient13, strIngredient14, strIngredient15,
                    strIngredient16, strIngredient17, strIngredient18,
                    strIngredient19, strIngredient20]
            }
            setModifiedMeal(simplifiedMeal);
        } else {
            setModifiedMeal(null);
        }

    }, [id, meal])


    return (
        <div>
            {loading && (
                <h2>Loading...</h2>
            )}
            {!loading && !modifiedMeal && <h2>No Meal To Display</h2>}
            {modifiedMeal && (
                <div>
                    {loading && <p>Loading...</p>}
                    {!loading && (
                        <>
                            <Link to="/"><button>Go Back</button></Link>
                            <p>{modifiedMeal.name}</p>
                            <img src={modifiedMeal.image} />
                            <p>{modifiedMeal.category}</p>
                            <p>{modifiedMeal.country}</p>
                            <iframe width="420" height="315"
                                src={`https://www.youtube.com/embed/${modifiedMeal.youtube}`}>
                            </iframe>

                            <ul>
                                {/* 1st way is using optional chaining */}
                                {/* modifiedMeal.ingredients?.map() etc */}
                                {/* 2nd way of checking if array exists  */}
                                {modifiedMeal.ingredients && modifiedMeal.ingredients.map(i => {
                                    if (i !== null && i !== "") {
                                        return <li>{i}</li>
                                    }
                                })}
                            </ul>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default SingleMeal;
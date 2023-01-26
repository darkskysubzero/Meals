import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMeals, getLoading, getMealList } from '../redux/features/mealSlice';
import { Link } from 'react-router-dom';


const MealList = () => {

    const mealList = useSelector(getMealList);
    const loading = useSelector(getLoading);
    const [modifiedMeals, setModifiedMeals] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMeals());
    }, [])


    useEffect(() => {
        if (mealList) {
            const simplifiedMeals = mealList.map(meal => {
                const { idMeal, strMeal, strCategory, strMealThumb } = meal;
                return {
                    id: idMeal,
                    name: strMeal,
                    category: strCategory,
                    image: strMealThumb
                }
            })
            setModifiedMeals(simplifiedMeals);
        }
    }, [mealList])


    return (
        <div>
            {loading && <h2>Loading....</h2>}
            {!loading && (
                modifiedMeals.map(meal => {
                    const { id, name, category, image } = meal;
                    return (
                        <div key={id}>
                            <p>{id}</p>
                            <p>{name}</p>
                            <p>{category}</p>
                            <img src={image} />
                            <Link to={`/meal/${id}`}><button>Details</button></Link>
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default MealList
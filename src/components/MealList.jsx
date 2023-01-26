import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMeals, getLoading, getMealList } from '../redux/features/mealSlice';
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';


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
        <div className='meallist'>
            {loading && <SyncLoader loading={loading} className="loader" size={30} />}
            {!loading && (
                modifiedMeals.map(meal => {
                    const { id, name, category, image } = meal;
                    return (
                        <div key={id} className="meal">
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
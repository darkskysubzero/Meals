import React from 'react'
import MealList from '../components/MealList'
import SearchInput from '../components/SearchInput'

const Home = () => {
    return (
        <div>
            {/* Search Input */}
            <SearchInput />

            {/* Meal List */}
            <MealList />
        </div>
    )
}

export default Home
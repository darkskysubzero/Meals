import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import MealList from '../components/MealList'
import SearchInput from '../components/SearchInput'

const Home = () => {
    return (
        <AnimatedPage>
            <div>
                {/* Search Input */}
                <SearchInput />

                {/* Meal List */}
                <MealList />
            </div>
        </AnimatedPage>
    )
}

export default Home
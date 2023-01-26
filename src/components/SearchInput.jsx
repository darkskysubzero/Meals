import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchedMeal } from '../redux/features/mealSlice';
import { useRef } from 'react';

const SearchInput = () => {

    const dispatch = useDispatch();
    const input = useRef();

    const handleChange = () => {
        dispatch(fetchSearchedMeal(input.current.value));
        if (input.current.value.length === 0) {
            dispatch(fetchSearchedMeal("a"));
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder='search meal'
                ref={input}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchInput
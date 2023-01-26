import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./features/mealSlice";

export const store = configureStore({
    reducer: {
        meals: mealsReducer
    }
})

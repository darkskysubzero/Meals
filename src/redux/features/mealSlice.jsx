import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    meals: [],
    meal: [],
    loading: false,
    error: null
}

export const fetchMeals = createAsyncThunk(
    "meals/fetchMeals",
    async () => {
        const req = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
        const res = await req.json();
        return res;
    }
)


export const fetchSingleMeal = createAsyncThunk(
    "meals/fetchSingleMeal",
    async (data) => {
        //data returns an object with id property
        const { id } = data;
        const req = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const res = await req.json();
        return res;
    }
)

export const fetchSearchedMeal = createAsyncThunk(
    "meals/fetchSearchedMeal",
    async (search) => {
        const req = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
        const res = await req.json();
        return res;
    }
)


const mealsSlice = createSlice({
    name: "meals",
    initialState,
    reducers: {},
    extraReducers: {
        // For Default All
        [fetchMeals.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchMeals.fulfilled]: (state, action) => {
            // meals returned by json data
            state.meals = action.payload.meals;
            state.loading = false;
        },
        [fetchMeals.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        // For Single
        [fetchSingleMeal.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchSingleMeal.fulfilled]: (state, action) => {
            // meals returned by json data
            state.meal = action.payload.meals;
            state.loading = false;
        },
        [fetchSingleMeal.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        // For Search
        [fetchSearchedMeal.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchSearchedMeal.fulfilled]: (state, action) => {
            // meals returned by json data
            state.meals = action.payload.meals;
            state.loading = false;
        },
        [fetchSearchedMeal.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }

})

export const getMealList = state => state.meals.meals;
export const getMeal = state => state.meals.meal;
export const getLoading = state => state.meals.loading;
export const mealActions = mealsSlice.actions;
export default mealsSlice.reducer;
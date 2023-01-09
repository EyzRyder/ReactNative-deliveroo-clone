import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlice'
import restaurantReducer from './slices/restaurantSlice'

export default configureStore({
    reducer: {
        basket: basketReducer,
        restaurant: restaurantReducer,
    }
})
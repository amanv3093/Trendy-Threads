import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/WishlistData'

export  const store = configureStore({
  reducer: {
    wishlistData : counterSlice
  },
})
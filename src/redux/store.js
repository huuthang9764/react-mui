import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/themeReducer'
const reducer = {
  themeSlice: themeSlice,
}
const store = configureStore({
    reducer: reducer,
    devTools: true,
  });


export default store;
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './redux/CategoriesSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;


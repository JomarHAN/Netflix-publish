import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import bannersReducer from '../features/bannersSlice'
import movieReducer from '../features/movieSlice'
import genresReducer from '../features/genresSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    banners: bannersReducer,
    movie: movieReducer,
    genres: genresReducer
  },
});

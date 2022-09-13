
import counterReducer from "./Slice";

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
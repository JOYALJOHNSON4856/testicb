import { configureStore } from '@reduxjs/toolkit'
import { CounterReducer } from './counter/counterSlice'
import { dataSliceReducer } from './dala/dataSlice'
import { sepDataReducer } from './sepdata/sepdata'
import { addsapi } from './services/contactApi'
import { authapi } from './services/Authapi'

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    photos: dataSliceReducer,
    sepData: sepDataReducer,
    [addsapi.reducerPath]: addsapi.reducer,
    [authapi.reducerPath]: authapi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(addsapi.middleware)
      .concat(authapi.middleware),
})

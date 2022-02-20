import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'


const storeData = () => {
  return {
     reducer:rootReducer
  }
}

const store = configureStore(storeData())  ;


export default store

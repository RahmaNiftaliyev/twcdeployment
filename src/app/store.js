/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './../features/navigation/navigationSlice'
import footerReducer from './../features/footer/footerSlice'
import usersReducer from './../features/components/form/usersSlice'

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    footer: footerReducer,
    users: usersReducer,
  },
})

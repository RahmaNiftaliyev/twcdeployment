/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './../features/navigation/navigationSlice'
import footerReducer from './../features/footer/footerSlice'
import usersReducer from './../features/components/form/usersSlice'
import industriesReducer from './../features/components/industry/industriesSlice'
import careersReducer from './../features/components/career/careersSlice'
import servicesReducer from './../features/components/services/servicesSlice'
import aboutReducer from './../features/components/about/aboutSlice'

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    footer: footerReducer,
    users: usersReducer,
    industries:industriesReducer,
    careers:careersReducer,
    services:servicesReducer,
    about:aboutReducer
  },
})

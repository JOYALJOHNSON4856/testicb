'use client'
import React from 'react'
import { Provider } from 'react-redux'
import {store } from '../../Redux/store'
import Header from '@/components/Header/Header'

const layout = ({children}) => {
  return (
    <div>
        <Provider store={store}>
        <Header/>
        {children}
        </Provider>
   
        </div>
  )
}

export default layout
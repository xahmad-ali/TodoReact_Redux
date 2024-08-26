import { configureStore } from '@reduxjs/toolkit'
import todoSlicer from './Slicer/todoSlicer'

export const store=configureStore({
    reducer: todoSlicer
})


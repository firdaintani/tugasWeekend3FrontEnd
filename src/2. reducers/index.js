import { combineReducers } from 'redux'
import UserState from './userGlobal'
import ProductState from './productGlobal'
import teksState from './teksGlobal'
import todoState from './todoGlobal'

export default combineReducers({
    user:UserState,
    product:ProductState,
    teks:teksState,
    todo:todoState
})
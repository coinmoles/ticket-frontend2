import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";


const reducers = combineReducers({
    auth: authReducer
})

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whiteList: ["auth"]
}

export const rootReducer = persistReducer(persistConfig, reducers);
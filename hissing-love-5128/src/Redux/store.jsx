import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import { reducer as AppReducer } from './AppReducer/reducer'
import { reducer as AuthReducer } from './AuthReducer/reducer'
import { reducer as ProductReducer } from './ProductReducer/reducer'
import { reducer as CartReducer } from './CartReducer/reducer'
import thunk from 'redux-thunk'
// import { reducer } from './reducer';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const rootReducer = combineReducers({AppReducer,AuthReducer,ProductReducer,CartReducer})

export const store = legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)


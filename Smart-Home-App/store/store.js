import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux'
import thunkMiddleware from 'redux-thunk';

import roomReducers from './reducers/room';

export const configureStore = preloadedState => {

    const rootReducer = combineReducers({
        rooms: roomReducers,
    })

    const middlewareEnhancer = applyMiddleware(thunkMiddleware)
    const composedEnhancer = compose(middlewareEnhancer)

    const store = createStore(rootReducer, preloadedState, composedEnhancer)

    return store
}
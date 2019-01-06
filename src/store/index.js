import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import quizes from './quizes'
import meta from './meta'
import errors from './errors'

// export store object
export default createStore(
    combineReducers({
        quizes,
        meta,
        errors,
    }),
    compose(
        applyMiddleware(...[thunk]),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

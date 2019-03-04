import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//import new reducer
const store = createStore(
  combineReducers({
    form: formReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);


export default store;

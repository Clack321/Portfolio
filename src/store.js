import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { reducer } from './reducers/reducer';
import { reducer as contact} from './reducers/contact-me';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//import new reducer
const store = createStore(
  combineReducers({
    form: formReducer,
    reducer,
    contact
  }),
  composeEnhancers(applyMiddleware(thunk))
);


export default store;

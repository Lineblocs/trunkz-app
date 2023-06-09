import { applyMiddleware, combineReducers, compose,createStore,} from 'redux';
import PostsReducer from './reducers/PostsReducer';
import thunk from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';
//import rootReducers from './reducers/Index';
import todoReducers from './reducers/Reducers';
import AppReducer from './reducers/AppReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    app:AppReducer,                                                         
    posts: PostsReducer,
    auth: AuthReducer,
		todoReducers,
	form: reduxFormReducer,	
	
});

//const store = createStore(rootReducers);

export const store = createStore(reducers,  composeEnhancers(middleware));

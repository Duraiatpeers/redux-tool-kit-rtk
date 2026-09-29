import {legacy_createStore as createStore} from 'redux';
import { composeWithDevTools }  from "@redux-devtools/extension";
import {countReducer} from './counterReducer'


export const store = createStore(countReducer,composeWithDevTools())
export type ROOTState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;






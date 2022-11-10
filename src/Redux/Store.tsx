import {createStore} from 'redux';
import {timerReducer} from './Reducer';

const Store = createStore(timerReducer);

export default Store;

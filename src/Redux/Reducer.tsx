import {TIMER} from './Action';

const initialValue = {
  timer: '',
};

export const timerReducer = (state = initialValue, {type, payload}: any) => {
  switch (type) {
    case TIMER:
      return {...state, timer: payload};
    default:
      return state;
  }
};

import { handleActions } from 'redux-actions';

import * as actions from './actions';
import { addMonths, yearStart } from './utils/dateUtils';

export const year = handleActions({
  [actions.prevYear](state) {
    return addMonths(state, -12);
  },
  [actions.nextYear](state) {
    return addMonths(state, 12);
  },
}, yearStart(new Date()));

export const activities = handleActions({
  [actions.setData](state, { payload: { data } }) {
    return data;
  },
}, []);

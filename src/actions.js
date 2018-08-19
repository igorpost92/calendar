import { createAction } from 'redux-actions';

export const nextYear = createAction('YEAR_NEXT');
export const prevYear = createAction('YEAR_PREV');

export const setData = createAction('DATA_SET');

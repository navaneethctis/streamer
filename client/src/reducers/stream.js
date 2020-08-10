import _ from 'lodash';

import {
  CREATE_STREAM,
  DESTROY_STREAM,
  EDIT_STREAM,
  INDEX_STREAMS,
  SHOW_STREAM
} from '../types';

const INITIAL_STATE = {};

const stream = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_STREAM:
    case EDIT_STREAM:
    case SHOW_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DESTROY_STREAM:
      return _.omit(state, action.payload);
    case INDEX_STREAMS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};

export default stream;

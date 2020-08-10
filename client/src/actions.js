import history from './history';

import {
  CREATE_STREAM,
  DESTROY_STREAM,
  EDIT_STREAM,
  INDEX_STREAMS,
  SHOW_STREAM,
  SIGN_IN,
  SIGN_OUT
} from './types';

import streamer from './apis/streamer';

const createStream = stream => async (dispatch, getState) => {
  const { userId } = getState().authentication;

  const { data } = await streamer.post('/streams', { ...stream, userId });

  dispatch({
    payload: data,
    type: CREATE_STREAM
  });

  history.push('/');
};

const deleteStream = id => async dispatch => {
  await streamer.delete(`/streams/${id}`);

  dispatch({
    payload: id,
    type: DESTROY_STREAM
  });

  history.push('/');
};

const updateStream = (id, updates) => async dispatch => {
  const { data } = await streamer.patch(`/streams/${id}`, updates);

  dispatch({
    payload: data,
    type: EDIT_STREAM
  });

  history.push('/');
};

const readStreams = () => async dispatch => {
  const { data } = await streamer.get('/streams');

  dispatch({
    payload: data,
    type: INDEX_STREAMS
  });
};

const readStream = id => async dispatch => {
  const { data } = await streamer.get(`/streams/${id}`);

  dispatch({
    payload: data,
    type: SHOW_STREAM
  });
};

const signIn = userId => ({
  payload: userId,
  type: SIGN_IN
});

const signOut = () => ({
  type: SIGN_OUT
});

export {
  createStream,
  deleteStream,
  updateStream,
  readStreams,
  readStream,
  signIn,
  signOut
};

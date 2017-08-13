import {
  GET_MESSAGE_REQUEST,
  GET_MESSAGE_REQUEST_SUCCESS,
  GET_MESSAGE_REQUEST_FAILURE
} from '../actions/getMessage';

let initialState = {
  text: "",
  isFetching: false
}

const message = (state = initialState, action) => {
  switch(action.type) {
    case GET_MESSAGE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_MESSAGE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        text: action.message,
        isFetching: false
      });
    case GET_MESSAGE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}

export default message;

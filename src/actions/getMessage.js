export const GET_MESSAGE_REQUEST = "GET_MESSAGE_REQUEST";
export const GET_MESSAGE_REQUEST_SUCCESS = "GET_MESSAGE_REQUEST_SUCCESS";
export const GET_MESSAGE_REQUEST_FAILURE = "GET_MESSAGE_REQUEST_FAILURE";

let getMessageRequest = () => {
  return {
    type: GET_MESSAGE_REQUEST
  };
};

let getMessageRequestSuccess = data => {
  return {
    type: GET_MESSAGE_REQUEST_SUCCESS,
    message: data
  };
};

let getMessageRequestFailure = () => {
  return {
    type: GET_MESSAGE_REQUEST_FAILURE
  };
};

let getMessage = () => dispatch => {
  dispatch(getMessageRequest())
  let message = new Promise((resolve, reject) => {
    resolve("Gotta Catch em all")
  });
  message.then((response) =>       dispatch(getMessageRequestSuccess(response)))
  .catch(() => dispatch(getMessageRequestFailure()))
};

export { getMessage };

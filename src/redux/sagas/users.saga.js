import { takeLatest, call, put } from "redux-saga/effects";

// WATCHER
export default function* requestUsersSaga() {
  console.log("USERS REQUESTED");
  yield takeLatest("REQUEST_USERS", receivedUsersSaga);
}

// WORKER
function* receivedUsersSaga() {
  try {
    const payload = yield call(getUsers);
    yield put({ type: "RECEIVED_USERS", payload: payload });
  } catch (e) {
    yield put({ type: "API_ERROR", payload: e });
  }
}

// ASYNC USERS REQUEST
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

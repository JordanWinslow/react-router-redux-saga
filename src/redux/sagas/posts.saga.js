import { takeLatest, put, call } from "redux-saga/effects";

// WATCHER
export default function* requestPostsSaga() {
  yield takeLatest("REQUEST_POSTS", receivedPostsSaga);
}
let postsRetrieved = false;
// WORKER
function* receivedPostsSaga() {
  if (postsRetrieved === false) {
    console.log("FETCHING POSTS ON INITIAL RENDER");
    postsRetrieved = true;
    try {
      const payload = yield call(getPosts);
      yield put({ type: "RECEIVED_POSTS", payload: payload });
    } catch (e) {
      yield put({ type: "API_ERROR", payload: e });
    }
  }
}

// ASYNC POSTS REQUEST
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
};

import { fork, all } from "redux-saga/effects";

import postsSaga from "./posts.saga";
import usersSaga from "./users.saga";
import updatePostsSaga from "./update.posts.saga";

export default function* rootSaga() {
  yield all([fork(postsSaga), fork(usersSaga), fork(updatePostsSaga)]);
}

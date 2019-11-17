import { put, call, takeLatest } from "redux-saga/effects";

export default function* updatePostRequest() {
  console.log("WATCHING FOR NEW POST UPDATES");
  yield takeLatest("UPDATE_POST_REQUEST", updatedPost);
}
function* updatedPost(newPost) {
  const payload = yield newPost;
  yield put({ type: "UPDATE_POSTS", payload: payload });
}

// UNUSED
const updatePost = async newPost => {
  console.log("ATTEMPTING TO UPDATE POST WITH DATA: ", newPost);

  // IF WE WERE TO UPDATE THE FAKE API
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.body,
      userId: newPost.userId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  const updatedPosts = await response.json();
  return updatedPosts;
};

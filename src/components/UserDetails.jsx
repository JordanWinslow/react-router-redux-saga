import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import BG from "./BG"

const UserDetails = ({ match, history, posts, updatePostRequest }) => {
  console.log("SHOWING POSTS FOR USER ID: ", match.params.userId)
  console.log(posts)
  const userPosts = posts.filter(
    post => post.userId.toString() === match.params.userId
  )
  console.log("POSTS: ", userPosts)
  const updatePosts = e => {
    e.preventDefault()
    const newPost = {
      userId: match.params.userId,
      title: e.target.title.value,
      body: e.target.body.value,
      id: posts[0].id !== 1 ? posts[0].id + 1 : posts[posts.length - 1].id + 1 // since I append the newest post to the front, I do a check on the first new update.
    }
    updatePostRequest(newPost)
  }
  return (
    <div>
      <BG />
      <FormContainer>
        <form align="center" onSubmit={updatePosts}>
          <label htmlFor="title">TITLE: </label>
          <br /> <input name="title" type="text" /> <br />
          <br />
          <label htmlFor="body">CONTENT: </label>
          <br /> <textarea name="body" />
          <br />
          <button type="submit" value="Submit">
            Create New Post
          </button>
        </form>
      </FormContainer>
      {userPosts.map(post => {
        return (
          <PostContainer key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </PostContainer>
        )
      })}
      <p>
        <GoHome onClick={() => history.push("/")}>Home</GoHome>
      </p>
    </div>
  )
}
/**********BEGIN STYLING**********/
const GoHome = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
  box-shadow: 0px 7px 7px -7px #276873;
  background-color: #fe4365;
  border-radius: 8px;
  color: #ffffff;
  font-size: 17px;
  letter-spacing: 2px;
  padding: 10px 25px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  transition: 0.3s ease-in-out;
  border: none;
  :hover {
    transform: translateY(-3px);
    box-shadow: 5px 5px 10px rgba(0, 50, 50, 0.5);
  }
`
const FormContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 5rem;
  margin-top: 5rem;
  padding: 5vw;
  box-shadow: 2px 2px 10px rgba(0, 50, 50, 0.3);
  backdrop-filter: blur(6px);
  label {
    font-size: 1.3rem;
  }
  input {
    width: 100%;
    height: 1.3rem;
    font-size: 1.3rem;
  }
  textarea {
    width: 100%;
    height: 6rem;
    font-size: 1.3rem;
  }
  button {
    margin-top: 2rem;
    width: 100%;
    cursor: pointer;
    box-shadow: 0px 7px 7px -7px #276873;
    background-color: #fe4365;
    border-radius: 8px;
    color: #ffffff;
    font-size: 17px;
    letter-spacing: 2px;
    padding: 10px 25px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #3d768a;
    transition: 0.3s ease-in-out;
    border: none;
    :hover {
      transform: translateY(-3px);
      box-shadow: 5px 5px 10px rgba(0, 50, 50, 0.5);
    }
  }
`
const PostContainer = styled.div`
  cursor: pointer;
  width: 70%;
  margin: auto;
  margin-bottom: 3rem;
  padding: 5vw;
  box-shadow: 2px 2px 10px rgba(0, 50, 50, 0.3);
  backdrop-filter: blur(6px);
  transition: 0.5s ease-in-out;
  h3 {
    font-size: 1.6rem;
  }
  p {
    font-size: 18px;
  }
  :hover {
    transform: translateY(-4px);
    box-shadow: 10px 10px 20px rgba(0, 50, 50, 0.5);
  }
`
/**********END STYLING**********/
const mapStateToProps = state => {
  return { posts: state.posts }
}
const mapDispatchToProps = dispatch => {
  return {
    updatePostRequest: post => {
      console.log("DISPATCHING: ", post)
      dispatch({ type: "UPDATE_POST_REQUEST", payload: post })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails)

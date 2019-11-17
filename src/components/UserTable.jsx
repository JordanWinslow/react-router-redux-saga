import React, { useEffect } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import BG from "./BG"

const UserTable = ({ history, users, requestUsers, requestPosts }) => {
  useEffect(() => {
    requestUsers()
    requestPosts()
    console.log("UserTable Component Rendered.")
  }, [])

  return (
    <Container>
      <BG />
      <Table>
        <tbody>
          <TR>
            <TH className="largeScreenOnly">ID</TH>
            <TH>NAME</TH>
            <TH className="largeScreenOnly">USERNAME</TH>
            <TH className="mediumScreenOnly">EMAIL</TH>
            <TH className="largeScreenOnly">PHONE</TH>
            <TH className="largeScreenOnly">WEBSITE</TH>
          </TR>
        </tbody>
        {users.map(user => {
          return (
            <tbody key={user.id}>
              <TR onClick={() => history.push(`/user/${user.id}`)}>
                <TD className="largeScreenOnly">{user.id}</TD>
                <TD>{user.name}</TD>
                <TD className="largeScreenOnly">{user.username}</TD>
                <TD className="mediumScreenOnly">{user.email}</TD>
                <TD className="largeScreenOnly">{user.phone}</TD>
                <TD className="largeScreenOnly">{user.website}</TD>
              </TR>
            </tbody>
          )
        })}
      </Table>
    </Container>
  )
}

/**********BEGIN STYLING**********/
const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  @media (max-width: 1120px) {
    .largeScreenOnly {
      display: none;
    }
    @media (max-width: 630px) {
      .mediumScreenOnly {
        display: none;
      }
    }
  }
`
const Table = styled.table`
  border-collapse: collapse;
  a {
    display: contents;
    text-decoration: none;
  }
  box-shadow: 2px 2px 10px rgba(0, 50, 50, 0.3);
  backdrop-filter: blur(4px);
`
const TH = styled.th`
  font-size: 18px;
  letter-spacing: 1px;
  padding: 20px 0;
  word-break: normal;
  color: #fdf6e3;
  background-color: #fe4365;
`
const TD = styled.td`
  font-size: 17px;
  padding: 20px 15px;
  word-break: normal;
  border-color: #c44d58;
  color: #002b36;
  transition: 0.3s ease-in-out;
`
const TR = styled.tr`
  cursor: pointer;
  transition: 0.6s ease-in-out;
  :hover {
    background-color: #fe4365;
    td {
      color: #fdf6e3;
    }
  }
`
/**********END STYLING**********/

const mapStateToProps = state => {
  return { users: state.users }
}
const mapDispatchToProps = dispatch => {
  return {
    requestUsers: () => {
      dispatch({ type: "REQUEST_USERS" })
    },
    requestPosts: () => {
      dispatch({ type: "REQUEST_POSTS" })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable)

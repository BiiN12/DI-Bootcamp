import { useEffect } from "react";
import { fetchUsers } from "./state/slice";
import { useSelector, useDispatch } from "react-redux";


import React from 'react'

function UsersBox() {
    const users = useSelector(state => state.usersReducer.users)
    // console.log(users);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchUsers())
    }, [])
    
  return (
    <>
    <h2>UsersBox</h2>
    <select>
        <option value={-1}>Select a write</option>
        {users && users.map(item => {
          return (
            <option key={item.id}>{item.name}</option>
          )
        })}
    </select>
    </>
  )
}

export default UsersBox
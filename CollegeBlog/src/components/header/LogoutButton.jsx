import React from 'react'
import store from '../../store/store'
import authService from '../../appWrite/auth'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'

function LogoutButton() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout());
        }).catch(() => {
            console.log("there is a problem in loggin out via log out button");
        })
    }

  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutButton
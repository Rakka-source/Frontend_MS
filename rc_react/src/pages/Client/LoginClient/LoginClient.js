import React from 'react'
import {LoginForm} from "../../../components/Client"
import "./LoginClient.scss"

export function LoginClient() {
  return (
    <div className='login-user'>
      <div className='login-user__content'>
        <h1>Rakka-Source</h1>
        <LoginForm/>
      </div>
    </div>
  )
}
